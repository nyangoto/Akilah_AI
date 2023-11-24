const handleImageChage = async (e: React.ChangeEvent<HTMLInputElement>) => {
setImageErrorSelected(false);
const imageSelected = e.target.files?.[0];

    if (imageSelected && imageSelected.name === inputRef.current?.value) {
      inputRef.current.value = '';
    }
    if (imageSelected?.name.match(/\.(jpg|jpeg|png)$/)) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const imageData = new FormData();
          imageData.append('file', imageSelected);
          imageData.append('api_key', '232957465595653');
          imageData.append('upload_preset', 'j6poosiy');
          imageData.append('cloud_name', 'j6poosiy');

          const res = await fetch(
            'https://api.cloudinary.com/v1_1/j6poosiy/image/upload',
            {
              method: 'POST',
              body: imageData,
            }
          );

          if (res.ok) {
            const jsonData = await res.json();
            setPostData((prevData) => ({
              ...prevData,
              post_image: [jsonData.url],
            }));
          } else {
            console.error('Failed to upload image to Cloudinary');
          }
        } catch (error) {
          console.error('Error uploading image to Cloudinary', error);
        }
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(imageSelected);
    } else {
      setImageErrorSelected(true);
    }
    // clear();

};

const handleImageRemove = () => {
setSelectedImage(null);
if (inputRef.current) {
inputRef.current.value = '';
}
};
