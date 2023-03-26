
import ReactLoading from 'react-loading';
const Loading = ()=>{
    return (
        <div className="text-white d-flex justify-content-center align-items-center">
            <ReactLoading type={"bars"} color={"#c1d1e8"} height={100} width={100} />
        </div>
    )
}
export default Loading;