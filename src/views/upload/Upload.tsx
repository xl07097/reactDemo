import React from 'react';
import { Upload, Icon, message } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import url from '@/utils/urls';

const { Dragger } = Upload;

const prop: UploadProps = {
    name: 'upfile',
    multiple: false,
    action: `${url.upload}`,
    onChange(data) {
        const { status, response } = data.file;
        if (status === 'uploading') {
            // console.log(data.file, data.fileList);
        }else if (status === 'done') {
            message.success(`${data.file.name} file uploaded successfully.`);
            console.log(response);
        } else if (status === 'error') {
            message.error(`${data.file.name} file upload failed.`);
        }
    }
}

const MyUpload: React.FC<{}> = props => {
    return (
        <Dragger {...prop}>
            <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
            </p>
        </Dragger>
    )
}

export default MyUpload;