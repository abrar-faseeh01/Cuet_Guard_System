const User = require('../models/user');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');



exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    res.status(200).json({
        success: true,
        user
    })
})

exports.getMemberProfile = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({
        success: true,
        user
    })
})



// Update user profile   =>   /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    // Update avatar
    if (req.body.avatar !== '') {
        const user = await User.findById(req.user._id)

        const image_id = user.avatar.public_id;
        const res = await cloudinary.v2.uploader.destroy(image_id);

        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: "scale"
        })

        newUserData.avatar = {
            public_id: result.public_id,
            url: result.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user._id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
});

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {

    try { 
      const users = await User.find()
        .sort({ date: -1 });
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      return next(new ErrorHandler("Failed to retrieve Posts", 500));
    }
});

exports.makeUserAdmin = catchAsyncErrors(async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id); 
  
      if (!user) {
        return next(new ErrorHandler("User post not found", 404));
      }
  
      user.is_admin = true;
      await user.save(); 
  
      res.status(200).json({
        success: true,
        message: "User is now an admin.", 
      });
    } catch (error) {
      return next(new ErrorHandler("Failed to make the user admin", 500));
    }
});