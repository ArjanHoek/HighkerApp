import Lodge from '../models/lodges.js';

export const createLodge = async (req, res) => {
  try {
    const lodge = new Lodge(req.body);

    await lodge.save();

    res.status(201).json({ status: 'success', lodge });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

export const getLodges = async (req, res) => {
  try {
    const lodges = await Lodge.find();

    res.status(200).json(lodges);
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

export const updateLodge = async (req, res) => {
  try {
    // This needs some validation and filtering
    const lodge = await Lodge.findById({ _id: req.params.id });
    Object.keys(req.body).forEach(option => (lodge[option] = req.body[option]));

    await lodge.save();
    res.status(200).json(lodge);
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};

export const deleteLodge = async (req, res) => {
  try {
    await Lodge.findOneAndDelete({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ status: 'fail', error });
  }
};
