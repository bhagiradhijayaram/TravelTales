import express from "express";
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new tour 
router.post("/", verifyAdmin, createTour);

// Update tour 
router.put("/:id", verifyAdmin, updateTour);

// Delete tour 
router.delete("/:id", verifyAdmin, deleteTour);

// Get single tour 
router.get("/:id", getSingleTour);

// Get All Tours
router.get("/", getAllTour);

// Get tour by search 
router.get("/search", getTourBySearch);

// Get featured tours 
router.get("/featured", getFeaturedTour);

// Get tour count 
router.get("/count", getTourCount);

export default router;
