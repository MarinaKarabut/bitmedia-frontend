import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import s from './Loader.module.scss'


function LoaderComponent({ onLoad }) {
  return (
    <div className={s.wrapper}>
      <Loader
        type="ThreeDots"
        color='#3A80BA'
        height={100}
        width={100}
        timeout={3000}
        loading={onLoad}
      />
    </div>
  );
}

export default LoaderComponent