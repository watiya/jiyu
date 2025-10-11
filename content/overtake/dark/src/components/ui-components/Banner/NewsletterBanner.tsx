import CardBox from 'src/components/shared/CardBox';
import Newsletterbanner from './Code/NewsletterBannerCode';
import NewsletterbannerCode from './Code/NewsletterBannerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const NewsletterBanner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Newsletter Banner</h4>
            <Newsletterbanner />
          </div>
          <CodeDialog>{NewsletterbannerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default NewsletterBanner;
