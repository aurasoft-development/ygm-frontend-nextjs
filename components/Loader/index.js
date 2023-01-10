import classes from "./Loader.module.css"
export default function Loader() {
    return (
        <div className={`${classes.image_box}`}>
            <div className={`${classes.image}`}>
                <img layout='fill' loader={() => '/Image/gyclogo.png'} src="/Image/ygm_YT.png" width="100px" height="170px" alt="web logo for loading... " />
                <span   className={`${classes.animate_charcter}`}>Loading... </span>
            </div>
        </div>
    )
}