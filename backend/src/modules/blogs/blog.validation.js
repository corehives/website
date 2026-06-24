const Joi = require("joi");

const create = Joi.object({
  slug: Joi.string()
    .pattern(/^[a-z0-9-]+$/)
    .required()
    .messages({ "string.pattern.base": "slug must be lowercase letters, numbers and hyphens only" }),
  featured: Joi.boolean().default(false),
  category: Joi.string()
    .valid("Development", "Design", "Web Dev", "AI & ML", "Mobile", "Branding", "Cloud")
    .required(),
  title: Joi.string().min(5).max(255).required(),
  excerpt: Joi.string().min(10).max(500).required(),
  content: Joi.array().items(Joi.object()).min(1).required(),
  author: Joi.string().required(),
  authorInitials: Joi.string().max(5).required(),
  authorRole: Joi.string().required(),
  authorBio: Joi.string().required(),
  readTime: Joi.string().required(),
  isPublished: Joi.boolean().default(false),
});

const update = create.fork(
  [
    "slug",
    "featured",
    "category",
    "title",
    "excerpt",
    "content",
    "author",
    "authorInitials",
    "authorRole",
    "authorBio",
    "readTime",
    "isPublished",
  ],
  (field) => field.optional()
);

module.exports = { create, update };
