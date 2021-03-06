﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using decisionmaker.Models;
using Microsoft.AspNetCore.Hosting.Internal;

namespace decisionmaker.Hubs
{
    public class Broadcaster : Hub
    {
        public override Task OnConnected()
        {
            // Set connection id for just connected client only
            return Clients.Client(Context.ConnectionId).SetConnectionId(Context.ConnectionId);
        }

        // Server side methods called from client
        public Task Subscribe(int matchId)
        {
            return Groups.Add(Context.ConnectionId, matchId.ToString());
        }

        public Task Unsubscribe(int matchId)
        {
            return Groups.Remove(Context.ConnectionId, matchId.ToString());
        }
    }

    // Client side methods to be invoked by Broadcaster Hub
    public interface IBroadcaster
    {
        Task SetConnectionId(string connectionId);
        Task UpdateDecisionData(string message);
    }
}
