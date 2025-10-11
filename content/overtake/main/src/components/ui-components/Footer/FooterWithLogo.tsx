import CardBox from 'src/components/shared/CardBox';
import FooterWithlogo from './Code/FooterWithLogoCode';
import FooterWithlogoCode from './Code/FooterWithLogoCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const FooterWithLogo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Footer With Logo</h4>
          <FooterWithlogo />
        </div>
        <CodeDialog>{FooterWithlogoCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default FooterWithLogo;
