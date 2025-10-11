import CodeDialog from 'src/components/ui-components/CodeDialog'
import CardBox from '../../shared/CardBox'
import CarouselmultipleItem from './code/CarouselMultipleItemCode'
import CarouselMultipleItemCode from './code/CarouselMultipleItemCode.tsx?raw'


const CarouselWithultipleItem = () => {
  return (
    <CardBox className='p-0'>
        <div>
    <div className="p-6">
        <h4 className="text-lg font-semibold">Carousel With Multiple Item</h4>
        <CarouselmultipleItem/>
    </div>
    <CodeDialog>{CarouselMultipleItemCode}</CodeDialog>
    </div>
</CardBox>
  )
}

export default CarouselWithultipleItem