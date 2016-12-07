using decisionmaker.Controllers.Api;
using decisionmaker.Hubs;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Infrastructure;

namespace decisionmaker.Controllers.Api
{
    [Route("api/[controller]")]
    public class SignalRMessageController : ApiHubController<Broadcaster>
    {
        public SignalRMessageController(IConnectionManager signalRConnectionManager)
        : base(signalRConnectionManager)
        {

        }

        // POST api/messages
        [HttpPost]
        public void Post([FromBody]SignalRMessage message)
        {
            this.Clients.Group(message.MatchId.ToString()).AddDecisionData(message);
        }
    }
}
