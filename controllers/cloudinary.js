


exports.postImageOnCloudinary = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {upload_preset: 'dev_setup'});
    console.log('uploadResponse: ', uploadedResponse);
    res.json({msh: 'working'});
  } catch (error) {
    console.error(error);
    res.status(500).json('something went wrong');
  }
};

exports.publishPublicIds = async (req, res) => {
  const {resources} = await cloudinary.search
  .expression('folder:dev_setups')
  .sort_by('public_id', 'desc')
  .max_results(30)
  .execute();
  const publicIds = resources.map(file => file.public_id);
  res.send(publicIds);
};
