class HomeController {
  GetDetails = async (req, res) => {
    try {
      res.status(200).json({
        message: "Welcome to the home page",
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export default HomeController;
