export const idlFactory = ({ IDL }) => {
    const Metadata = IDL.Variant({
      'Int' : IDL.Int,
      'Nat' : IDL.Nat,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Bool' : IDL.Bool,
      'Nat8' : IDL.Nat8,
      'Text' : IDL.Text,
    });
    const ReputationChangeRequest = IDL.Record({
      'value' : IDL.Opt(IDL.Nat),
      'source' : IDL.Tuple(IDL.Text, IDL.Nat),
      'metadata' : IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, Metadata))),
      'user' : IDL.Principal,
      'comment' : IDL.Opt(IDL.Text),
      'timestamp' : IDL.Nat,
      'category' : IDL.Text,
      'reviewer' : IDL.Opt(IDL.Principal),
    });
    const EventField = IDL.Record({
      'value' : IDL.Vec(IDL.Nat8),
      'name' : IDL.Text,
    });
    const EventName = IDL.Variant({
      'BurnEvent' : IDL.Null,
      'CollectionCreatedEvent' : IDL.Null,
      'AddToCollectionEvent' : IDL.Null,
      'RemoveFromCollectionEvent' : IDL.Null,
      'CollectionDeletedEvent' : IDL.Null,
      'CreateEvent' : IDL.Null,
      'NewRegistrationEvent' : IDL.Null,
      'AwaitingReputationUpdateEvent' : IDL.Null,
      'InstantReputationUpdateEvent' : IDL.Null,
      'Unknown' : IDL.Null,
      'FeedbackSubmissionEvent' : IDL.Null,
      'CollectionUpdatedEvent' : IDL.Null,
    });
    const Event = IDL.Record({
      'reputation_change' : ReputationChangeRequest,
      'topics' : IDL.Vec(EventField),
      'details' : IDL.Opt(IDL.Text),
      'sender_hash' : IDL.Opt(IDL.Text),
      'eventType' : EventName,
    });
    const Result = IDL.Variant({
      'Ok' : IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Nat)),
      'Err' : IDL.Text,
    });
    const EventFilter = IDL.Record({
      'fieldFilters' : IDL.Vec(EventField),
      'eventType' : IDL.Opt(EventName),
    });
    const Subscriber = IDL.Record({
      'callback' : IDL.Principal,
      'filter' : EventFilter,
    });
    const Category = IDL.Text;
    const EventFilter__1 = IDL.Record({
      'fieldFilters' : IDL.Vec(EventField),
      'eventType' : IDL.Opt(EventName),
    });
    const CanisterId = IDL.Text;
    const DocId = IDL.Nat;
    const Hub = IDL.Service({
      'clearAllLogs' : IDL.Func([], [IDL.Bool], []),
      'emitEvent' : IDL.Func([Event], [Result], []),
      'getAllSubscribers' : IDL.Func([], [IDL.Vec(Subscriber)], []),
      'getCategories' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(Category, IDL.Text))],
          [],
        ),
      'getSubscribers' : IDL.Func([EventFilter__1], [IDL.Vec(Subscriber)], []),
      'getUserDocuments' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(IDL.Tuple(CanisterId, DocId))],
          [],
        ),
      'subscribe' : IDL.Func([Subscriber], [IDL.Bool], []),
      'unsubscribe' : IDL.Func([IDL.Principal], [], []),
      'viewLogs' : IDL.Func([IDL.Nat], [IDL.Vec(IDL.Text)], []),
    });
    return Hub;
  };
  export const init = ({ IDL }) => { return []; };
  