
import CardBox from '../../shared/CardBox'
import Loadingbutton from './code/LoadingButtonCode'
import LoadingButtonCode from './code/LoadingButtonCode.tsx?raw'
import CodeDialog from 'src/components/ui-components/CodeDialog'



const LoadingButton = () => {
    return (
        <CardBox className='p-0'>
            <div>
            <div className="p-6">
                <h4 className="text-lg font-semibold">Loading Button</h4>
               <Loadingbutton/>
            </div>
            <CodeDialog>{LoadingButtonCode}</CodeDialog>
            </div> 
        </CardBox>
    )
}

export default LoadingButton