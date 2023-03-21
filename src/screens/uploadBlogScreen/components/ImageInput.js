import { UPLOAD_FILE } from "../../../config/constants";

export default function ImageInput(props) {
    const imageInputStyle = {
        width: "100%",
        textAlign: "center"
    };
    
    const imageStyle = {
        width: "70%",
        maxWidth: "100%",
        borderRadius: "17px",
        height: "400px"
    };

    const inputStyle = {
        textAlign: "left",
        padding: "0% 15%",
        marginTop: "43px"
    };
    
    const labelStyle = {
        backgroundColor: "yellow",
        padding: "17px 17px",
        borderRadius: "17px"
    };
    
    const imageInput = (props.imageInput === "" || props.imageInput === undefined) ? require("../../assets/post_lg_2.jpg") : props.imageInput;
    
    const onFileUploaded = (e) => {
        let fileUpload = e.target.files[0];

        if (fileUpload.size > 2000000) {
            return;
        }

        let fileReader = new FileReader();

        fileReader.readAsDataURL(fileUpload);

        fileReader.onload = () => {
            props.uploadImage(fileReader.result);
        };

        fileReader.onerror = (error) => {
            console.log(error);
        };
    };
    
    return <div style={imageInputStyle}>
        <img src={imageInput} style={imageStyle}></img>   
        <div style={inputStyle}>
            <input type="file" id="upload-blog-input-image" hidden={true} onChange={onFileUploaded} />
            <label for="upload-blog-input-image" style={labelStyle}>{UPLOAD_FILE}</label>
        </div>
    </div>;
}