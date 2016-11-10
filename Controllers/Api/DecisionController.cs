using System;
using System.Collections.Generic;
using decisionmaker.Controllers.Api.Models;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;

namespace decisionmaker.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class DecisionController : Controller
    {
        public DecisionController(DecisionRepository decisions)
        {
            Decisions = decisions;
        }

        public IDecisionRepository Decisions { get; set; }

        [HttpGet]
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

        [HttpPost]
        public IActionResult Create([FromBody] Decision item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            Decisions.Add(item);
            return CreatedAtRoute("GetDecision", new { id = Guid.NewGuid() }, item);
        }
    }
}
