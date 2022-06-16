import { Editor } from "@tinymce/tinymce-react";
import { Fragment, useState } from "react";

export const RichText = ({ val, setValue, id, placeholder }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Fragment>
      {loading && <div className="p-4">Loading...</div>}
      <label className="label" htmlFor={id}>
        {placeholder}
      </label>
      <Editor
        apiKey="9ubkcjelsw09eia53jdpmu2re0lz52hf2qvhjahfnuk4ion8"
        value={val}
        onInit={() => setLoading(false)}
        init={{
          height: 250,
          menubar: "table",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help code",
        }}
        onEditorChange={(content) => {
          setValue(content);
        }}
      />
    </Fragment>
  );
};