import { connect } from "http2";
import prisma from "../db";

// Get one update
export const getOneUpdate = async (req, res) => {
  const updates = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updatesMerged = updates.reduce((allupdates, product) => {
    return [...allupdates, ...product.updates];
  }, []);

  const update = updatesMerged.find((update) => update.id === req.params.id);

  res.json({ data: update });
};

// Get All updates
export const getAllUpdates = async (req, res) => {
  const updates = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updatesMerged = updates.reduce((allupdates, product) => {
    return [...allupdates, ...product.updates];
  }, []);

  res.json({ data: updatesMerged });
};

//Create Update
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: { connect: { id: product.id } },
    },
  });
  res.json({ data: update });
};

// Update update
export const updateUpdate = async (req, res) => {
  const updates = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updatesMerged = updates.reduce((allupdates, product) => {
    return [...allupdates, ...product.updates];
  }, []);

  const match = updatesMerged.find((update) => update.id === req.params.id);

  if (!match) {
    return res.json({ message: "nope" });
  }

  const updated = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updated });
};

//Delete Update
export const deleteUpdate = async (req, res) => {
  const updates = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updatesMerged = updates.reduce((allupdates, product) => {
    return [...allupdates, ...product.updates];
  }, []);

  const match = updatesMerged.find((update) => update.id === req.params.id);

  if (!match) {
    return res.json({ message: "nope" });
  }

  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
