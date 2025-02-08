import { SecretVaultWrapper } from 'nillion-sv-wrappers';
import { config } from './config';

export const postObj = async (data, schemaId) => {
    try {
        const collection = new SecretVaultWrapper(
            config.nodes,
            config.orgCredentials,
            schemaId
        );
        await collection.init();

        const dataWritten = await collection.writeToNodes(data);
        console.log(
            '👀 Data written to nodes:',
            JSON.stringify(dataWritten, null, 2)
        );

        const newIds = [
            ...new Set(dataWritten.map((item: any) => item.result.data.created).flat()),
        ];
        console.log('uploaded record ids:', newIds);

        return newIds;
        // const decryptedCollectionData = await collection.readFromNodes({});

        // console.log(
            // 'Most recent records',
            // decryptedCollectionData.slice(0, data.length)
        // );
    } catch (error: any) {
        console.error('❌ SecretVaultWrapper error:', error.message);
        process.exit(1);
    }
}
