import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
    const feedbackId = req.query.feedbackId;

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    const feedbackItem = data.find((feedback) => feedback.id === feedbackId);

    res.status(200).json({feedback : feedbackItem});

}

export default handler;