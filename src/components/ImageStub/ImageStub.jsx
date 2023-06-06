import imageStub from 'images/cleanPaper.png';
import css from './ImageStub.module.css';

const ImageStub = () => {
  return (
    <div className={css.imageStub}>
      <img src={imageStub} alt="searchImage" width={500} />
    </div>
  );
};

export default ImageStub;
    