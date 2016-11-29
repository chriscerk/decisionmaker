using System.Collections.Generic;
using System.Threading.Tasks;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;

namespace decisionmaker.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class OptionController : Controller
    {

        [HttpGet]
        [Produces(typeof(Option[]))]
        public async Task<ActionResult> Get()
        {
            return Ok(new[] {
                new Option()
                {
                    Description = "Hello World!",
                    Name = "Option 1",
                    PositiveAttributes = "The good",
                    NegativeAttributes = "The bad",
                    Notes = "The ugly"
                },
                new Option()
                {
                    Description = "Hello World!",
                    Name = "Option 2",
                    PositiveAttributes = "The good",
                    NegativeAttributes = "The bad",
                    Notes = "The ugly"
                }
            });
        }

        [Route("all/")]
        [HttpGet]
        [Produces(typeof(Option[]))]
        public async Task<ActionResult> All()
        {
            return Ok(new[] {
                new Option()
                {
                    Description = "Hello World!",
                    Name = "Option 1",
                    PositiveAttributes = "The good",
                    NegativeAttributes = "The bad",
                    Notes = "The ugly"
                },
                new Option()
                {
                    Description = "Hello World!",
                    Name = "Option 2",
                    PositiveAttributes = "The good",
                    NegativeAttributes = "The bad",
                    Notes = "The ugly"
                },
                new Option()
                {
                    Description = "Hello World!",
                    Name = "Option 3",
                    PositiveAttributes = "The good",
                    NegativeAttributes = "The bad",
                    Notes = "The ugly"
                },
                new Option()
                {
                    Description = "Hello World!",
                    Name = "Option 4",
                    PositiveAttributes = "The good",
                    NegativeAttributes = "The bad",
                    Notes = "The ugly"
                },
            });
        }

        [Route("new/")]
        [HttpGet]
        [Produces(typeof(Option[]))]
        public async Task<ActionResult> NewOptions()
        {
            var options = new[]
            {
                new Option()
                {
                    Description = "",
                    Name = "",
                    MetGoals = new[] {"", "", ""},
                    PositiveAttributes = "",
                    NegativeAttributes = "",
                    Notes = ""
                },
                new Option()
                {
                    Description = "",
                    Name = "",
                    MetGoals = new[] {"", "", ""},
                    PositiveAttributes = "",
                    NegativeAttributes = "",
                    Notes = ""
                }
            };
            return Ok(options);
        }
    }
}
