import { SharedContracts } from './shared-contracts';

export namespace AssetContracts {
    export interface IAssetModelContract {
        id: string;
        file_name: string;
        title: string;
        image_width: number | null;
        image_height: number | null;
        size: number;
        type: string;
        file_reference: IAssetFileReferenceContract;
        descriptions: IAssetFileDescriptionContract[];
        external_id: string;
        last_modified: string;
        url: string;
        folder?: IAssetFolderReferenceContract;
    }

    export interface IAssetFileReferenceContract  {
        id: string;
        type: string;
    }

    export interface IAssetFolderReferenceContract {
        id?: string;
        external_id?: string;
    }

    export interface IAssetFileDescriptionContract {
        language: SharedContracts.IReferenceObjectContract;
        description: string;
    }

    export interface IAssetsListingResponseContract {
        assets: IAssetModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IUploadBinaryFileResponseContract extends IAssetFileReferenceContract {
    }

    export interface IAddAssetResponseContract extends IAssetModelContract {
    }

    export interface IUpdateAssetResponseContract extends IAssetModelContract {
    }

    export interface IUpsertAssetResponseContract extends IAssetModelContract {
    }

    export interface IDeleteAssetResponseContract {
    }
}


