import CardBox from 'src/components/shared/CardBox';
import Companyprofile from './Code/CompanyProfileCode';
import CompanyprofileCode from './Code/CompanyProfileCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CompanyProfile = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Company Profile</h4>
            <Companyprofile />
          </div>
          <CodeDialog>{CompanyprofileCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CompanyProfile;
