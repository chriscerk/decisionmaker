using System;
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
                new Goal() {Description = "Hello World!", Name = "Goal 1", Rank = "High"},
                new Goal() {Description = "Hello World!", Name = "Goal 2", Rank = "Low"},
                new Goal() {Description = "Hello World!", Name = "Goal 3", Rank = "Medium"}
            });
        }

        [Route("all/")]
        [HttpGet]
        [Produces(typeof(Goal[]))]
        public async Task<ActionResult> All()
        {
            return Ok(new[] {
                new Goal() {Description = "Hello World!", Name = "Goal 1", Rank = "High"},
                new Goal() {Description = "Hello World!", Name = "Goal 2", Rank = "Low"},
                new Goal() {Description = "Hello World!", Name = "Goal 3", Rank = "Medium"},
                new Goal() {Description = "Hello World!", Name = "Goal 4", Rank = "High"},
                new Goal() {Description = "Hello World!", Name = "Goal 5", Rank = "Low"},
                new Goal() {Description = "Hello World!", Name = "Goal 6", Rank = "Medium"}
            });
        }
    }
}
