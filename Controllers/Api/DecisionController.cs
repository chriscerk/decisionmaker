using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using decisionmaker.Controllers.Api.Models;
using decisionmaker.Hubs;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Infrastructure;

namespace decisionmaker.Controllers.Api
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class DecisionController : ApiHubController<Broadcaster>
    {
        public DecisionController(IConnectionManager signalRConnectionManager, IDecisionRepository decisions) 
            : base(signalRConnectionManager)
        {
            Decisions = decisions;
        }

        public IDecisionRepository Decisions { get; set; }

        [Route("new/")]
        [HttpGet]
        [Produces(typeof(Decision))]
        public async Task<ActionResult> NewDecision()
        {
            var d = new Decision()
            {
                Name = "",
                Description = "",
                Results = "",
                Goals = new[]
                {
                    new Goal()
                    {
                        Description = "",
                        Name = "",
                        Rank = ""
                    },
                },
                Options = new[]
                {
                    new Option()
                    {
                        Description = "",
                        MetGoals = new[] {"", "", ""},
                        Name = "",
                        PositiveAttributes = "",
                        NegativeAttributes = "",
                        Notes = ""
                    },
                    new Option()
                    {
                        Description = "",
                        MetGoals = new[] {"", "", ""},
                        Name = "",
                        PositiveAttributes = "",
                        NegativeAttributes = "",
                        Notes = ""
                    },
                    new Option()
                    {
                        Description = "",
                        MetGoals = new[] {"", "", ""},
                        Name = "",
                        PositiveAttributes = "",
                        NegativeAttributes = "",
                        Notes = ""
                    }
                },
            };

            Decisions.Add(d);
            return Ok(d);
        }
        
        [Route("all/")]
        [HttpGet]
        [Produces(typeof(Decision[]))]
        public IEnumerable<Decision> GetAll()
        {
            return Decisions.GetAll();
        }

        [HttpGet("{id}", Name = "GetDecision")]
        public IActionResult GetById(string id)
        {
            var item = Decisions.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}
