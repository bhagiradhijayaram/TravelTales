
import Tour from '../models/Tour.js'

// create new tour
export const createTour = async(req, res) =>{
    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();
        res
        .status(200)
        .json({success:true, message:"Successfully created",
        date:savedTour
    });
    } catch(err) {
        res
        .status(500)
        .json({success:false, message:"Failed to create. Try again"
    });
    }
};

// update Tour
const updateTour = async (req, res) =>{
    const id = req.params.id
    try {
    const updateTour = await Tour.findByIdAndUpdate(id, {
        $set: req.dody
    }, {new:true})

    res
    .status(200)
    .json({success:true, message:"Successfully updated",
    date:updateTour,
});
    }catch(err) {
        res
        .status(500)
        .json({success:false, message:"failed to update",
    });

    }
};
// delete Tour
const deleteTour = async (req, res) =>{
    const id = req.params.id
    try {
    await Tour.findByIdAndDelete(id);

    res
    .status(200)
    .json({success:true, message:"Successfully deleted",
});
    }catch(err) {
        res
        .status(500)
        .json({success:false, message:"failed to delete",
    });

    }
};
// getSingle Tour
const getSingleTour = async (req, res) =>{
    const id = req.params.id
    try {
    const tour = await Tour.findById(id);

    res
    .status(200)
    .json({success:true, message:"Successfully deleted",
    data:tour
});
    }catch(err) {
        res
        .status(404)
        .json({success:false, message:"not found",
    });

    }
};
// getAll Tour
const getAllTour = async (req, res) =>{

    // for pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).populate('reviews');

        res.status(200).json({})

        res
        .status(200)
        .json({success:true, count: tours.length, message:"Successfully",
        data:tour,
    });
    }catch(err) {
        res
        .status(404)
        .json({success:false, message:"not found",
    });

    }
};

//get tour by search
export const getTourSearch = async(req,res)=> {

    const city = new RegExp(req.query.city,'i');
    const distance = paraseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try{
        const tours = await Tour.find({city, distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize}}).populate('reviews');

        res
        .status(200)
        .json({success:true, message:"Successfully",
        data:tours,
    });

    } catch(err) {
        res
        .status(404)
        .json({success:false, message:"not found",
    });
    }
};




// get featured Tour
const getFeaturedTour = async (req, res) =>{


    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);

        res.status(200).json({})

        res
        .status(200)
        .json({success:true, message:"Successfully",
        data:tour,
    });
    }catch(err) {
        res
        .status(404)
        .json({success:false, message:"not found",
    });

    }
};


// get tour Counts 
export const getTourCount = async(req,res) => {
    try{
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount });
    } catch(err){
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
};