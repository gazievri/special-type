import "./UpLoad.sass";
import { useState, useRef } from "react";
import { useEffect } from "react";
import getMask from "../../utils/getMask/getMask";

const UpLoad = ({ setImageUpload }) => {
  const filePicker = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageUpload(event.target.files[0]);
  };

  // Обработчик загрузки картинки
  const handlePick = (event) => {
    filePicker.current.click()
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setPreview(null);
    setImageUpload(null);
  };

  // Обработчик отображения привью загруженной картинки
  useEffect(() => {
    if (selectedFile !== null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  return (
    <label className="upload">
      <span>Ваша фотография</span>
      <img
        className={
          selectedFile === null
            ? "upload__selected-foto_hidden"
            : "upload__selected-foto"
        }
        src={preview}
        alt="Ваша фотография"
      />
      <button
        className={selectedFile === null ? "upload__load" : "upload__delete"}
        onClick={selectedFile === null ? handlePick : handleDelete}
        type="button"
      >
        {selectedFile === null ? "Загрузить" : "Удалить"}
      </button>
      <input
        className="upload__input"
        ref={filePicker}
        type="file"
        onChange={handleChange}
        accept="image/*,.png,.jpg,.jpeg,.web,"
      />
      {/* {getMask('poster')} */}
    </label>
  );
};

export default UpLoad;
