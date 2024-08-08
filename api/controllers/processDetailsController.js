const asyncHandler = require("express-async-handler");
const ProcessDetail = require("../modals/ProcessDetailModal");

const createProcessDetails = asyncHandler(async (req, res) => {
    try {
    const processDetaile = new ProcessDetail(req.body);
    const savedProcessDetails = await processDetaile.save();
    res.status(200).json(savedProcessDetails);
  } catch (err) {
    res.status(505).json(err);
  }
});

const allProcessDetails = asyncHandler(async (req, res) => {
    try {
      const detailer = await ProcessDetail.find({
        processId: req.params.processId,
      });
      res.status(200).json(detailer);
  } catch (err) {
      res.status(505).json(err);
  }
});
const processDetailsWithType = asyncHandler(async (req, res) => {
  try {
    const processDeailts = await ProcessDetail.find({
      processId: req.params.processId,
    });
    const fileterdProcessDetails = processDeailts.filter(
      (process) => process.type === req.params.type
    );
    res.status(200).json(fileterdProcessDetails);
  } catch (err) {
    res.status(505).json(err);
  }
});


const deleteProcessDetail = asyncHandler(async (req, res) => {
    try {
       await ProcessDetail.findByIdAndDelete(req.params.id);
       res.status(200).json("Process detail Deleted Successfuly.");
  } catch (err) {
      res.status(505).json(err);
  }
});

module.exports = {
  createProcessDetails,
  allProcessDetails,
  deleteProcessDetail,
  processDetailsWithType,
};
