import { SecretVaultWrapper } from 'nillion-sv-wrappers';
import { config } from './config';

export const getObj = async (schemaId) => {
    try {
        const collection = new SecretVaultWrapper(
            config.nodes,
            config.orgCredentials,
            schemaId
        );
        await collection.init();

        const decryptedCollectionData = await collection.readFromNodes({});

        console.log(
            'Most recent records',
            decryptedCollectionData.slice(0, decryptedCollectionData.length)
        );

        return decryptedCollectionData;
    } catch (error: any) {
        console.error('❌ SecretVaultWrapper error:', error.message);
        process.exit(1);
    }
}
