using decisionmaker.Hubs;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Infrastructure;

namespace LiveGameFeed.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController : ApiHubController<Broadcaster>
    {
        public MessagesController(IConnectionManager signalRConnectionManager)
        : base(signalRConnectionManager)
        {

        }

        // POST api/messages
        [HttpPost]
        public void Post([FromBody]DecisionData message)
        {
            this.Clients.Group(message.MatchId.ToString()).AddDecisionData(message);
        }
    }
}
