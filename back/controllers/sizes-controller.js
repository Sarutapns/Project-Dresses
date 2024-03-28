const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new size
exports.createSizes = async (req, res, next) => {
  const { size } = req.body;
  try {
    const newSize = await prisma.sizes.create({
      data: {
        size,
      },
    });
    res.status(201).json({ sizes: newSize });
  } catch (error) {
    next(error);
  }
};

// Get all sizes
exports.getAllSizes = async (req, res, next) => {
  try {
    const sizes = await prisma.sizes.findMany();
    res.status(200).json({ sizes });
  } catch (error) {
    next(error);
  }
};

// Get size by ID
exports.getSizesById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const size = await prisma.sizes.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!size) {
      return res.status(404).json({ message: 'Sizes not found' });
    }
    res.status(200).json({ size });
  } catch (error) {
    next(error);
  }
};

// Update size by ID
exports.updateSizesById = async (req, res, next) => {
  const { id } = req.params;
  const { size } = req.body;
  try {
    const updatedSizes = await prisma.sizes.update({
      where: {
        id: parseInt(id),
      },
      data: {
        size,
      },
    });
    res.status(200).json({ sizes: updatedSizes });
  } catch (error) {
    next(error);
  }
};

// Delete size by ID
exports.deleteSizesById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.sizes.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
