using System;

namespace decisionmaker.Models
{
    public class SignalRMessage
    {
        public int MatchId { get; set; }
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
