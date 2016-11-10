using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;

namespace decisionmaker.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class DecisionController : Controller
    {
        [HttpGet]
        [Produces(typeof(Goal[]))]
        public IActionResult Get()
        {
            return Ok(new Decision()
            {
                Id = 1,
                Name = "Hello World!",
                Description = "",
                Goals = new Goal[] {},
                Options = new Option[] {}
            });
        }
    }
}
