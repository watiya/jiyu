import { Label, FileInput } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const FileUploadSizings = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold mb-2">File Upload Sizing</h4>
    <div>
      <div className="my-5">
        <Label htmlFor="small-file-upload">Small file input</Label>
        <FileInput id="small-file-upload" sizing="sm" className="form-control" />
      </div>
      <div className="mb-5">
        <Label htmlFor="default-file-upload">Default size file input</Label>
        <FileInput id="default-file-upload" className="form-control" />
      </div>
      <div>
        <Label htmlFor="large-file-upload">Large file input</Label>
        <FileInput id="large-file-upload" sizing="lg" className="form-control" />
      </div>
    </div>
  </CardBox>
</div>

  );
};

export default FileUploadSizings;
