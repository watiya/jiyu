import { Blockquote } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const MediumSizeTypo = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold">Sizes Medium</h4>
        <Blockquote className="text-xl">
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer"
        </Blockquote>
      </CardBox>
    </div>
  );
};

export default MediumSizeTypo;
