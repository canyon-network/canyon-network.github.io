---
title: Survey on existing storage platforms
slug: /survey
---

> This survey is still incomplete and might have mistakes. Please contact us if you find anything incorrect in this document.

## Data Sharing

In terms of data sharing, the following projects could be classified into two categories by whether there is an explicit economic compensation for sharing data on the network in the protocol level:

| Project  | Explicit economic compensation for data sharing |
| -------- | ----------------------------------------------- |
| Arweave  | <center>No</center>                             |
| Siacoin  | <center>No</center>                             |
| Filecoin | <center>Yes</center>                            |
| Storj    | <center>Yes</center>                            |

Users of Filecoin and Storj must pay for retrieving data, the cost and way of getting data is thoroughly defined in the protocol
Filecoin has a builtin retrieval market [3] which is used for negotiating deals for a storage provider to serve stored data to a client. The negotiation process for the retrieval happens primarily off-chain, only some parts of it like payment related involve the interactions with blockchain. The payment takes place incrementally as data is received, using a payment channel. Due to Storj is not using a typical blockchain-based architecture, it has a pricing table for the storage and bandwidth cost similiar to the traditional centralized cloud provider[4]. The satellites in Storj, kind of the global resources dispatcher, will record the contribution of each storage node in terms of storage and bandwidth and pay them accordingly.

Unlike the above, Arweave and Siacoin barely relys on the network peers manager machenism or the self-control of market, they hold that users should not pay any extra fee for reading the data stored in the network, i.e., no fee for the bandwidth cost.

According to [2], Arweave protocol argues that the network should allow users to request transaction data for free, the nodes in Arweave can not differentiate whether the data request comes from an external user or another peer. All of nodes rank their peers in terms of accuracy and speed of response, which is weighted in units such as _bytes per second from last N responses_. With the more responsive peers being prioritised for outbound messages, the low-scoring nodes will be unable to mine effectively as they can only receive block/transactions in a low priority.

In the opinion of Siacoin [1], the incentives for providing the service of data request are not part of the protocol, but entirely dependent on client behaviour, for clients dominate in the retrieval market due to they can use erasure codes to safeguard against hosts refusing to response. If the nodes don't cooperate positively, clients will ignore them and only choose those cooperative to upload their files, making the preference of uploading from clients function as the download incentive for the nodes in fact.

- [1] https://sia.tech/sia.pdf, 7.3 Uptime Incentives.
- [2] https://www.arweave.org/files/arweave-yellowpaper.pdf, 2.5 Wildfire and related sections.
- [3] https://spec.filecoin.io/systems/filecoin_markets/retrieval_market/
- [4] https://www.storj.io/pricing
