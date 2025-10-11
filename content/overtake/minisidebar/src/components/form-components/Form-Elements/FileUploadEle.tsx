import { Label, FileInput, HelperText } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const FileUploadEle = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">File Upload</h4>
        <div id="fileUpload" className="max-w-md pb-[6.625rem]">
          <div className="mb-2 block">
            <Label htmlFor="file">Upload file</Label>
          </div>
          <FileInput
            id="file"
          />
          <HelperText>A profile picture is useful to confirm your are logged into your account</HelperText>
        </div>
      </CardBox>
    </div>
  );
};

export default FileUploadEle;
