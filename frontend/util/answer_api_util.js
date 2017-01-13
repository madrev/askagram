


export const sendToCloudinary = (file) => {
  const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/askagram/upload';
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "askagram");
  return $.ajax({
    method: "POST",
    url: CLOUDINARY_UPLOAD_URL,
    data: formData,
    processData: false,
    contentType: false
  });
};

export const createAnswer = (image_url, question_id, user_id) => (
  $.ajax({
    method: "POST",
    url: `api/questions/${question_id}/answers`,
    data: { "answer": {image_url, user_id}}
  })
);

export const deleteAnswer = id => (
  $.ajax({
    method: "DELETE",
    url: `api/answers/${id}`
  })
);
