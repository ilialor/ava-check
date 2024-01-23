export const idlFactory = ({ IDL }) => {
    const TxIndex__1 = IDL.Nat;
    const Tokens = IDL.Nat;
    const TxIndex = IDL.Nat;
    const DocId = IDL.Nat;
    const Timestamp = IDL.Nat64;
    const TransferFromError = IDL.Variant({
      'GenericError' : IDL.Record({
        'message' : IDL.Text,
        'error_code' : IDL.Nat,
      }),
      'TemporarilyUnavailable' : IDL.Null,
      'InsufficientAllowance' : IDL.Record({ 'allowance' : IDL.Nat }),
      'BadBurn' : IDL.Record({ 'min_burn_amount' : Tokens }),
      'Duplicate' : IDL.Record({ 'duplicate_of' : TxIndex }),
      'NotFound' : IDL.Record({ 'message' : IDL.Text, 'docId' : DocId }),
      'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
      'CreatedInFuture' : IDL.Record({ 'ledger_time' : Timestamp }),
      'TooOld' : IDL.Null,
      'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
    });
    const Result_2 = IDL.Variant({
      'Ok' : TxIndex__1,
      'Err' : TransferFromError,
    });
    const Metadata = IDL.Variant({
      'Int' : IDL.Int,
      'Nat' : IDL.Nat,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Bool' : IDL.Bool,
      'Nat8' : IDL.Nat8,
      'Text' : IDL.Text,
    });
    const Result_1 = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text });
    const Category = IDL.Text;
    const DocId__1 = IDL.Nat;
    const DocHistory = IDL.Record({
      'changedBy' : IDL.Principal,
      'value' : IDL.Nat8,
      'comment' : IDL.Text,
      'timestamp' : IDL.Int,
      'docId' : DocId,
    });
    const Subaccount = IDL.Vec(IDL.Nat8);
    const Category__1 = IDL.Text;
    const CategoryError = IDL.Variant({
      'GenericError' : IDL.Record({
        'message' : IDL.Text,
        'error_code' : IDL.Nat,
      }),
      'TemporarilyUnavailable' : IDL.Null,
      'CategoryAlreadyExists' : IDL.Record({
        'cifer' : IDL.Text,
        'category' : Category__1,
      }),
      'NotFound' : IDL.Record({ 'message' : IDL.Text, 'docId' : DocId }),
      'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
      'CategoryDoesNotExist' : IDL.Record({ 'category' : Category__1 }),
      'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
    });
    const Result = IDL.Variant({
      'Ok' : IDL.Tuple(Category, IDL.Text),
      'Err' : CategoryError,
    });
    return IDL.Service({
      'addUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'burnReputation' : IDL.Func(
          [
            IDL.Record({
              'from' : IDL.Principal,
              'category' : IDL.Text,
              'amount' : IDL.Nat,
            }),
          ],
          [Result_2],
          [],
        ),
      'clearAllLogs' : IDL.Func([], [IDL.Bool], []),
      'clearDocHistory' : IDL.Func([], [IDL.Bool], []),
      'clearOldestLogs' : IDL.Func([IDL.Nat], [IDL.Bool], []),
      'clearTags' : IDL.Func([], [IDL.Bool], []),
      'clearUserReputation' : IDL.Func([], [IDL.Bool], []),
      'eventHandler' : IDL.Func(
          [
            IDL.Record({
              'value' : IDL.Opt(IDL.Nat),
              'source' : IDL.Tuple(IDL.Text, IDL.Nat),
              'metadata' : IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, Metadata))),
              'user' : IDL.Principal,
              'comment' : IDL.Opt(IDL.Text),
              'timestamp' : IDL.Nat,
              'category' : IDL.Text,
              'reviewer' : IDL.Opt(IDL.Principal),
            }),
          ],
          [Result_1],
          [],
        ),
      'getCategories' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(Category, IDL.Text))],
          ['query'],
        ),
      'getCiferByCategory' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Text)], ['query']),
      'getDocHistory' : IDL.Func([DocId__1], [IDL.Vec(DocHistory)], ['query']),
      'getDocReputation' : IDL.Func([DocId__1], [IDL.Nat], []),
      'getExpertCategories' : IDL.Func(
          [IDL.Principal],
          [IDL.Principal, IDL.Vec(IDL.Tuple(Category, IDL.Nat))],
          ['query'],
        ),
      'getExperts' : IDL.Func(
          [],
          [
            IDL.Vec(
              IDL.Tuple(IDL.Principal, IDL.Vec(IDL.Tuple(Category, IDL.Nat)))
            ),
          ],
          ['query'],
        ),
      'getMintingAccountPrincipal' : IDL.Func([], [IDL.Principal], []),
      'getReputationByCategory' : IDL.Func(
          [IDL.Principal, IDL.Text],
          [IDL.Opt(IDL.Tuple(Category, IDL.Nat))],
          [],
        ),
      'getSpecialistCategories' : IDL.Func(
          [IDL.Principal],
          [IDL.Principal, IDL.Vec(IDL.Tuple(Category, IDL.Nat))],
          ['query'],
        ),
      'getSpecialists' : IDL.Func(
          [],
          [
            IDL.Vec(
              IDL.Tuple(IDL.Principal, IDL.Vec(IDL.Tuple(Category, IDL.Nat)))
            ),
          ],
          ['query'],
        ),
      'getSubaccountByCategory' : IDL.Func([Category], [IDL.Opt(Subaccount)], []),
      'getTagByCifer' : IDL.Func(
          [IDL.Text],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
          ['query'],
        ),
      'getUserBalance' : IDL.Func([IDL.Principal], [IDL.Nat], []),
      'getUserReputation' : IDL.Func([IDL.Principal], [IDL.Nat], []),
      'isUserInWhitelist' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
      'removeUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'setNewCategory' : IDL.Func([Category, IDL.Text], [Result], []),
      'userBalanceByCategory' : IDL.Func(
          [IDL.Principal, IDL.Text],
          [IDL.Nat],
          [],
        ),
      'viewLogs' : IDL.Func([IDL.Nat], [IDL.Vec(IDL.Text)], []),
    });
  };
  export const init = ({ IDL }) => { return []; };
  