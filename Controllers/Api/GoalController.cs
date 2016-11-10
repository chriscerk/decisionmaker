using System.Collections.Generic;
using System.Threading.Tasks;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;

namespace decisionmaker.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class GoalController : Controller
    {

        [HttpGet]
        [Produces(typeof(Goal[]))]
        public async Task<ActionResult> Get()
        {
            return Ok(new[] {
                new Goal() {Description = "Hello World!", Id = "1", Name = "Goal 1", Rank = "High"},
                new Goal() {Description = "Hello World!", Id = "2", Name = "Goal 2", Rank = "Low"}
            });
        }

        [Route("all/")]
        [HttpGet]
        [Produces(typeof(Goal[]))]
        public async Task<ActionResult> All()
        {
            return Ok(new[] {
                new Goal() {Description = "Hello World!", Id = "1", Name = "Goal 1", Rank = "High"},
                new Goal() {Description = "Hello World!", Id = "2", Name = "Goal 2", Rank = "Low"}
            });
        }
    }
}
