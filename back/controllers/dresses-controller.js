const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createDress = async (req, res, next) => {
    const { dressesName, dressesType, color, price,image, sizes } = req.body;
    try {
      const dress = await prisma.dresses.create({
        data: {
          dressesName,
          dressesType,
          color,
          price,
          image,
          sizes: {
            create: sizes.map(size => ({ size })),
          },
        },
        include: {
          sizes: true,
        },
      });
      res.status(201).json({ dress });
    } catch (error) {
      next(error);
    }
  };
  
  
 
  exports.getAllDresses = async (req, res, next) => {
    try {
      const dresses = await prisma.dresses.findMany({
        include: { sizes: true },
      });
      res.status(200).json({ dresses });
    } catch (error) {
      next(error);
    }
  };
  
  
  exports.getDressById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const dress = await prisma.dresses.findUnique({
        where: { id: parseInt(id) },
        include: { sizes: true },
      });
      if (!dress) {
        return res.status(404).json({ message: 'Dress not found' });
      }
      res.status(200).json({ dress });
    } catch (error) {
      next(error);
    }
  };
  

  exports.updateDressById = async (req, res, next) => {
    const { id } = req.params;
    const { dressesName, dressesType, color, price, image, sizes } = req.body;
    try {
        const updatedDress = await prisma.dresses.update({
            where: { id: parseInt(id) },
            data: {
                dressesName,
                dressesType,
                color,
                price,
                image,
                sizes: {
                  create: sizes.map(size => ({ size })),
                },
            },
            include: {
                sizes: true,
            },
        });
        res.status(200).json({ dress: updatedDress });
    } catch (error) {
        next(error);
    }
};

  
 
  exports.deleteDressById = async (req, res, next) => {
    const { id } = req.params;
    try {
      await prisma.dresses.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
  