export const idlFactory = ({ IDL }) => {
  const UserId = IDL.Principal;
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const TokenId = IDL.Nat;
  const TransferArgs = IDL.Record({
    'to' : Account,
    'spender_subaccount' : IDL.Opt(Subaccount),
    'from' : IDL.Opt(Account),
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'is_atomic' : IDL.Opt(IDL.Bool),
    'token_ids' : IDL.Vec(TokenId),
    'created_at_time' : IDL.Opt(IDL.Nat64),
  });
  const TransferId = IDL.Nat;
  const TransferError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Record({}),
    'Duplicate' : IDL.Record({ 'duplicate_of' : TransferId }),
    'Unauthorized' : IDL.Record({ 'token_ids' : IDL.Vec(TokenId) }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : IDL.Nat64 }),
    'TooOld' : IDL.Null,
  });
  const TransferReceipt = IDL.Variant({
    'Ok' : TransferId,
    'Err' : TransferError,
  });
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
    'AwaitingReputationUpdateEvent' : IDL.Null,
    'InstantReputationUpdateEvent' : IDL.Null,
    'EmitEvent' : IDL.Null,
    'Unknown' : IDL.Null,
    'FeedbackSubmissionEvent' : IDL.Null,
  });
  const Event = IDL.Record({
    'reputation_change' : ReputationChangeRequest,
    'topics' : IDL.Vec(EventField),
    'details' : IDL.Opt(IDL.Text),
    'sender_hash' : IDL.Opt(IDL.Text),
    'eventType' : EventName,
  });
  const EventError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'SupplyCapOverflow' : IDL.Null,
    'TagNotFound' : IDL.Record({ 'tag' : IDL.Text }),
    'Unauthorized' : IDL.Null,
    'InvalidRecipient' : IDL.Null,
    'AlreadyExistTokenId' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : Event, 'err' : EventError });
  const Document = IDL.Record({
    'categories' : IDL.Vec(IDL.Text),
    'tokenId' : TokenId,
    'owner' : IDL.Principal,
    'metadata' : IDL.Vec(IDL.Tuple(IDL.Text, Metadata)),
  });
  const GetTransactionsArgs = IDL.Record({
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'account' : IDL.Opt(Account),
  });
  const Transaction = IDL.Record({
    'kind' : IDL.Text,
    'mint' : IDL.Opt(
      IDL.Record({ 'to' : Account, 'token_ids' : IDL.Vec(TokenId) })
    ),
    'icrc7_transfer' : IDL.Opt(
      IDL.Record({
        'to' : Account,
        'from' : Account,
        'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
        'token_ids' : IDL.Vec(TokenId),
        'created_at_time' : IDL.Opt(IDL.Nat64),
        'spender' : IDL.Opt(Account),
      })
    ),
    'timestamp' : IDL.Nat64,
    'icrc7_approve' : IDL.Opt(
      IDL.Record({
        'from' : Account,
        'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
        'token_ids' : IDL.Opt(IDL.Vec(TokenId)),
        'created_at_time' : IDL.Opt(IDL.Nat64),
        'expires_at' : IDL.Opt(IDL.Nat64),
        'spender' : Account,
      })
    ),
  });
  const GetTransactionsResult = IDL.Record({
    'total' : IDL.Nat,
    'transactions' : IDL.Vec(Transaction),
  });
  const ApprovalArgs = IDL.Record({
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'from_subaccount' : IDL.Opt(Subaccount),
    'token_ids' : IDL.Opt(IDL.Vec(TokenId)),
    'created_at_time' : IDL.Opt(IDL.Nat64),
    'expires_at' : IDL.Opt(IDL.Nat64),
    'spender' : Account,
  });
  const ApprovalId = IDL.Nat;
  const ApprovalError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Record({}),
    'Unauthorized' : IDL.Record({ 'token_ids' : IDL.Vec(TokenId) }),
    'TooOld' : IDL.Null,
  });
  const ApprovalReceipt = IDL.Variant({
    'Ok' : ApprovalId,
    'Err' : ApprovalError,
  });
  const CallError = IDL.Variant({
    'GenericError' : IDL.Null,
    'SupplyCapOverflow' : IDL.Null,
    'InvalidTokenId' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'InvalidRecipient' : IDL.Null,
    'AlreadyExistTokenId' : IDL.Null,
  });
  const BalanceResult = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : CallError });
  const CollectionMetadata = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Opt(IDL.Text),
    'supplyCap' : IDL.Opt(IDL.Nat),
    'totalSupply' : IDL.Nat,
    'royalties' : IDL.Opt(IDL.Nat16),
    'royaltyRecipient' : IDL.Opt(Account),
    'image' : IDL.Opt(IDL.Text),
    'symbol' : IDL.Text,
  });
  const MetadataResult = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Tuple(IDL.Text, Metadata)),
    'Err' : CallError,
  });
  const OwnerResult = IDL.Variant({ 'Ok' : Account, 'Err' : CallError });
  const SupportedStandard = IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text });
  const TokensOfResult = IDL.Variant({
    'Ok' : IDL.Vec(TokenId),
    'Err' : CallError,
  });
  const Certficate = IDL.Record({
    'tokenId' : IDL.Nat,
    'owner' : IDL.Text,
    'date' : IDL.Text,
    'publisher' : IDL.Text,
    'name' : IDL.Text,
    'reputation' : IDL.Record({ 'value' : IDL.Nat, 'category' : IDL.Text }),
    'basis' : IDL.Text,
  });
  const Collection = IDL.Service({
    'addUser' : IDL.Func([UserId], [IDL.Bool], []),
    'burn' : IDL.Func([TransferArgs], [TransferReceipt], []),
    'clearAllLogs' : IDL.Func([], [IDL.Bool], []),
    'createCertificate' : IDL.Func(
        [
          IDL.Record({
            'user_principal' : IDL.Text,
            'document_type' : IDL.Text,
            'category' : IDL.Text,
            'course' : IDL.Text,
          }),
        ],
        [Result],
        [],
      ),
    'getCanisterId' : IDL.Func([], [IDL.Text], ['query']),
    'getDocumentById' : IDL.Func([TokenId], [IDL.Opt(Document)], ['query']),
    'getWhitelistAsTextArray' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'get_collection_owner' : IDL.Func([], [Account], ['query']),
    'get_transactions' : IDL.Func(
        [GetTransactionsArgs],
        [GetTransactionsResult],
        ['query'],
      ),
    'icrc7_approve' : IDL.Func([ApprovalArgs], [ApprovalReceipt], []),
    'icrc7_balance_of' : IDL.Func([Account], [BalanceResult], ['query']),
    'icrc7_collection_metadata' : IDL.Func([], [CollectionMetadata], ['query']),
    'icrc7_description' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'icrc7_image' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'icrc7_metadata' : IDL.Func([TokenId], [MetadataResult], ['query']),
    'icrc7_name' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_owner_of' : IDL.Func([TokenId], [OwnerResult], ['query']),
    'icrc7_royalties' : IDL.Func([], [IDL.Opt(IDL.Nat16)], ['query']),
    'icrc7_royalty_recipient' : IDL.Func([], [IDL.Opt(Account)], ['query']),
    'icrc7_supply_cap' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_supported_standards' : IDL.Func(
        [],
        [IDL.Vec(SupportedStandard)],
        ['query'],
      ),
    'icrc7_symbol' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_total_supply' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc7_transfer' : IDL.Func([TransferArgs], [TransferReceipt], []),
    'isUserInWhitelist' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'removeUser' : IDL.Func([UserId], [IDL.Bool], []),
    'tokens_of' : IDL.Func([Account], [TokensOfResult], ['query']),
    'userCertificates' : IDL.Func([IDL.Principal], [IDL.Vec(Certficate)], []),
    'viewLogs' : IDL.Func([IDL.Nat], [IDL.Vec(IDL.Text)], []),
  });
  return Collection;
};
export const init = ({ IDL }) => { return []; };
