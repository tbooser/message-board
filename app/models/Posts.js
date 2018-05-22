let addNewPost = () => {
	let Posts = sequelize.define(
		"posts",
		{
			title: {
				type: Sequelize.STRING
			},
			content: {
				type: Sequelize.STRING
			}
		},
		{
			freezeTableName: true
		}
	);

	Posts.sync({ force: true }).then(() => {
		return Posts.create({
			content: ""
		});
	});
};
