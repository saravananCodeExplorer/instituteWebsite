import { CarouselComponent } from '../../Carousel/Slider';
import JobPrepProcess from '../StudentPreContent';
import Services from '../Services';
import AboutUs from '../About';


const HomeComponent = () => {
  return (
    <div>
      <CarouselComponent />
      <JobPrepProcess />
      <Services />
      <AboutUs/>
    </div>
  );
}

export default HomeComponent
