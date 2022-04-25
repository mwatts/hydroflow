window.BENCHMARK_DATA = 
{
  "lastUpdate": 1650772278097,
  "repoUrl": "https://github.com/hydro-project/hydroflow",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c7a7304291dea4fd8fd95509c17b6aa1d4ea029c",
          "message": "fixup! Update CI for new index.md",
          "timestamp": "2021-10-30T00:20:02Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c7a7304291dea4fd8fd95509c17b6aa1d4ea029c"
        },
        "date": 1635553707322,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375679,
            "range": "± 2779",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 203020318,
            "range": "± 942138",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 188451017,
            "range": "± 1640198",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8449248,
            "range": "± 44861",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41778614,
            "range": "± 190313",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 43210330,
            "range": "± 395969",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12952216,
            "range": "± 8883",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2318677,
            "range": "± 3391",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2349046,
            "range": "± 2204",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "8399cf953a2563110977cd61c750fe8308f54a92",
          "message": "Implement reachability/hydroflow (scheduled + compiled) benchmark",
          "timestamp": "2021-10-30T00:39:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8399cf953a2563110977cd61c750fe8308f54a92"
        },
        "date": 1635555313000,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375647,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 189152213,
            "range": "± 790008",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 182167295,
            "range": "± 1577713",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9399075,
            "range": "± 21406",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46056758,
            "range": "± 104428",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47882792,
            "range": "± 337911",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14676732,
            "range": "± 12000",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2582580,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2585103,
            "range": "± 1997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "8399cf953a2563110977cd61c750fe8308f54a92",
          "message": "Implement reachability/hydroflow (scheduled + compiled) benchmark",
          "timestamp": "2021-10-30T00:39:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8399cf953a2563110977cd61c750fe8308f54a92"
        },
        "date": 1635555922725,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 442207,
            "range": "± 6134",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 212331529,
            "range": "± 1121643",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 213734991,
            "range": "± 2432352",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11164260,
            "range": "± 176971",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 56509458,
            "range": "± 3421375",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56616409,
            "range": "± 1097022",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17743046,
            "range": "± 1049780",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3063127,
            "range": "± 48540",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3046803,
            "range": "± 37017",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "8399cf953a2563110977cd61c750fe8308f54a92",
          "message": "Implement reachability/hydroflow (scheduled + compiled) benchmark",
          "timestamp": "2021-10-30T00:39:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8399cf953a2563110977cd61c750fe8308f54a92"
        },
        "date": 1635565697726,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 391735,
            "range": "± 18957",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200863567,
            "range": "± 4144721",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 192958632,
            "range": "± 6767139",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9414247,
            "range": "± 404288",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 48966351,
            "range": "± 2541011",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50325679,
            "range": "± 3289662",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15669888,
            "range": "± 761113",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2737481,
            "range": "± 117040",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2715808,
            "range": "± 116018",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "8399cf953a2563110977cd61c750fe8308f54a92",
          "message": "Implement reachability/hydroflow (scheduled + compiled) benchmark",
          "timestamp": "2021-10-30T00:39:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8399cf953a2563110977cd61c750fe8308f54a92"
        },
        "date": 1635652084444,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375761,
            "range": "± 2816",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 202092415,
            "range": "± 563865",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 193003411,
            "range": "± 2192581",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9431773,
            "range": "± 15649",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47063629,
            "range": "± 188646",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48263527,
            "range": "± 355608",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14681844,
            "range": "± 7898",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2564455,
            "range": "± 3510",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2576607,
            "range": "± 2895",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "8399cf953a2563110977cd61c750fe8308f54a92",
          "message": "Implement reachability/hydroflow (scheduled + compiled) benchmark",
          "timestamp": "2021-10-30T00:39:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8399cf953a2563110977cd61c750fe8308f54a92"
        },
        "date": 1635738504544,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375679,
            "range": "± 2939",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 196343875,
            "range": "± 1227717",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 195172065,
            "range": "± 2304817",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9345891,
            "range": "± 26936",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47631627,
            "range": "± 152823",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48418903,
            "range": "± 338575",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685187,
            "range": "± 29852",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2672987,
            "range": "± 2518",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2593610,
            "range": "± 2511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "id": "c22ed90898193d05436d6743ed282338755d03f7",
          "message": "Add TeeingHandoff",
          "timestamp": "2021-10-29T21:58:32Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c22ed90898193d05436d6743ed282338755d03f7"
        },
        "date": 1635791856227,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 389310,
            "range": "± 15953",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 193643352,
            "range": "± 2884312",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 194953275,
            "range": "± 4838714",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 81623672,
            "range": "± 1597776",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9537620,
            "range": "± 405853",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 52154485,
            "range": "± 1292359",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50485401,
            "range": "± 2072238",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15244301,
            "range": "± 718444",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2723170,
            "range": "± 111775",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2821681,
            "range": "± 108703",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "id": "df21b5d61e524f71f58d502a60a203e6817617f4",
          "message": "split out handoffs",
          "timestamp": "2021-11-01T19:16:16Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/df21b5d61e524f71f58d502a60a203e6817617f4"
        },
        "date": 1635824893552,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375642,
            "range": "± 2635",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 185909925,
            "range": "± 277878",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 181779076,
            "range": "± 2324279",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 57969395,
            "range": "± 217161",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11908413,
            "range": "± 75621",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44655375,
            "range": "± 93963",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48238780,
            "range": "± 332151",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14674819,
            "range": "± 10872",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2554236,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2562939,
            "range": "± 2224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "2e3eb331c796a9347b6b69f87c68f2a8e51c1306",
          "message": "Add [ci-bench] tag to trigger CI benchmark on push",
          "timestamp": "2021-11-02T10:49:23-07:00",
          "tree_id": "5fa89012d3b52c03c6e179d5776daf9e46bb5b9d",
          "url": "https://github.com/hydro-project/hydroflow/commit/2e3eb331c796a9347b6b69f87c68f2a8e51c1306"
        },
        "date": 1635875900887,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375637,
            "range": "± 2734",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198990009,
            "range": "± 969183",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 197408439,
            "range": "± 2149795",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 58293374,
            "range": "± 637446",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8643096,
            "range": "± 15054",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 45835993,
            "range": "± 159493",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48377676,
            "range": "± 1238118",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14679331,
            "range": "± 13158",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2602169,
            "range": "± 4748",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2634837,
            "range": "± 14829",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "43ee3ba5eb43eec8c1f745bc0fcdbaab24c8b544",
          "message": "Add scheduling from external events [ci-bench]",
          "timestamp": "2021-11-02T17:39:18-07:00",
          "tree_id": "663ebf0e8ef3009d5a4d87eab404923d3547571c",
          "url": "https://github.com/hydro-project/hydroflow/commit/43ee3ba5eb43eec8c1f745bc0fcdbaab24c8b544"
        },
        "date": 1635900491775,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 289933,
            "range": "± 8499",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 194009194,
            "range": "± 7346502",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 196374047,
            "range": "± 8411504",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 55322556,
            "range": "± 1804335",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10571947,
            "range": "± 315289",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43984444,
            "range": "± 1413400",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48090379,
            "range": "± 1465975",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 13447248,
            "range": "± 427528",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2486712,
            "range": "± 65478",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2504562,
            "range": "± 79149",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "43ee3ba5eb43eec8c1f745bc0fcdbaab24c8b544",
          "message": "Add scheduling from external events [ci-bench]",
          "timestamp": "2021-11-03T00:39:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/43ee3ba5eb43eec8c1f745bc0fcdbaab24c8b544"
        },
        "date": 1635911322935,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374938,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195809189,
            "range": "± 847005",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 193276982,
            "range": "± 7379308",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 59748749,
            "range": "± 609697",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9410961,
            "range": "± 25570",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 45618128,
            "range": "± 1728252",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47962525,
            "range": "± 392320",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14684229,
            "range": "± 8354",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2587617,
            "range": "± 2845",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2584035,
            "range": "± 1817",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "justin.jaffray@gmail.com",
            "name": "Justin Jaffray",
            "username": "justinj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d424e7d6474b049f604f2de6855897591536505",
          "message": "Extend Covid tracing demo (#4)\n\nThis commit extends the Covid tracing demo to run in real-time. Includes a\r\nbunch of randomly generated data to give it some texture.",
          "timestamp": "2021-11-03T13:41:21-07:00",
          "tree_id": "8c61f5637b9eab45b53f67f9dfa592b52cdd5eeb",
          "url": "https://github.com/hydro-project/hydroflow/commit/6d424e7d6474b049f604f2de6855897591536505"
        },
        "date": 1635972729834,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375270,
            "range": "± 2707",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 204742143,
            "range": "± 2942681",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 206982129,
            "range": "± 2839406",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 60655494,
            "range": "± 989345",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9439682,
            "range": "± 25274",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46115710,
            "range": "± 1847212",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48979169,
            "range": "± 567073",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14692228,
            "range": "± 7714",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2612959,
            "range": "± 63455",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2586284,
            "range": "± 2399",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "b1f4d69adf9176173b33cd0ede41c6f6c1ded831",
          "message": "Split scheduled module into smaller pieces",
          "timestamp": "2021-11-03T14:08:22-07:00",
          "tree_id": "59d7a921deb6015f15b037aa697f9e6e2b082488",
          "url": "https://github.com/hydro-project/hydroflow/commit/b1f4d69adf9176173b33cd0ede41c6f6c1ded831"
        },
        "date": 1635974247842,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374809,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 196596146,
            "range": "± 433211",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 193832066,
            "range": "± 10762725",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 57965932,
            "range": "± 328030",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13104551,
            "range": "± 53254",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46054287,
            "range": "± 1837529",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48308799,
            "range": "± 381528",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14688791,
            "range": "± 81121",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2645936,
            "range": "± 2856",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2600648,
            "range": "± 2146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "d3a9ff36f6b976c857bee3cec778417bcae7b061",
          "message": "CI only publish local packages, no deps",
          "timestamp": "2021-11-03T14:23:34-07:00",
          "tree_id": "712d768cfad41db5f841c96f6c100fe62cfd4dd4",
          "url": "https://github.com/hydro-project/hydroflow/commit/d3a9ff36f6b976c857bee3cec778417bcae7b061"
        },
        "date": 1635975159323,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375251,
            "range": "± 2578",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198181480,
            "range": "± 755013",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 196598035,
            "range": "± 6151133",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 58897303,
            "range": "± 696921",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13040022,
            "range": "± 45243",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46816667,
            "range": "± 1634625",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48103337,
            "range": "± 656378",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14687502,
            "range": "± 61553",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2638540,
            "range": "± 2567",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2606364,
            "range": "± 3264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "d3a9ff36f6b976c857bee3cec778417bcae7b061",
          "message": "CI only publish local packages, no deps",
          "timestamp": "2021-11-03T21:23:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d3a9ff36f6b976c857bee3cec778417bcae7b061"
        },
        "date": 1635997754004,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 447894,
            "range": "± 6719",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 209923918,
            "range": "± 587277",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 212794554,
            "range": "± 7952056",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 64542947,
            "range": "± 198363",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 15487923,
            "range": "± 133107",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53409674,
            "range": "± 555476",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57422162,
            "range": "± 536566",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17540864,
            "range": "± 106125",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3116035,
            "range": "± 21482",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3075319,
            "range": "± 20946",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "9a191e21feb75d5d869c6ce039749d882ff1f35c",
          "message": "Make HandoffId distinct for parallel multigraph edges",
          "timestamp": "2021-11-04T13:18:46-07:00",
          "tree_id": "0f0bd95f1e1d6b70b761f97664851b05a510f665",
          "url": "https://github.com/hydro-project/hydroflow/commit/9a191e21feb75d5d869c6ce039749d882ff1f35c"
        },
        "date": 1636057683423,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375481,
            "range": "± 2618",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 190027635,
            "range": "± 241918",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 190608338,
            "range": "± 6157315",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 59332192,
            "range": "± 601101",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 14076754,
            "range": "± 150021",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46955414,
            "range": "± 82366",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50240966,
            "range": "± 687294",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14689160,
            "range": "± 5618",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2627643,
            "range": "± 2673",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2606017,
            "range": "± 3248",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "56cec4343a9aaba80c688168d2407634c0211daf",
          "message": "Introduce an \"Input\" for ingressing data (#6)\n\nThis also does some minor optimization to make it less expensive to constantly\r\nschedule the same operator. Only did a thread-local version for now, just to\r\ntry to get it working, I think it's easy to extend to a version that can be\r\ncross-thread from here.",
          "timestamp": "2021-11-04T22:11:41Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/56cec4343a9aaba80c688168d2407634c0211daf"
        },
        "date": 1636084189388,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 384868,
            "range": "± 22245",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 234781974,
            "range": "± 6166925",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 253681998,
            "range": "± 8939243",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 69256807,
            "range": "± 3375021",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 18500100,
            "range": "± 1242007",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 56136576,
            "range": "± 2458359",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 64049689,
            "range": "± 4478736",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17407680,
            "range": "± 771768",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3274774,
            "range": "± 142151",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3250199,
            "range": "± 183231",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a9bd5130025e6ab514bf0e32c30ea918b501821",
          "message": "Make Input threadsafe (optionally) (#8)",
          "timestamp": "2021-11-05T18:45:40Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9a9bd5130025e6ab514bf0e32c30ea918b501821"
        },
        "date": 1636170578065,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 460118,
            "range": "± 25206",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 221097015,
            "range": "± 4031206",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 218686344,
            "range": "± 2689454",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 68529531,
            "range": "± 664752",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 16783210,
            "range": "± 167546",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 55071680,
            "range": "± 267632",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 60399949,
            "range": "± 589445",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17636609,
            "range": "± 10312",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3206692,
            "range": "± 8508",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3169604,
            "range": "± 12459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "9fad013dd15eb50158c920380cf8ab201062565f",
          "message": "Replace git dependency with workspace sibling\n\nFixes the build",
          "timestamp": "2021-11-08T19:06:55Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9fad013dd15eb50158c920380cf8ab201062565f"
        },
        "date": 1636408631387,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 380001,
            "range": "± 31321",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206547592,
            "range": "± 4620497",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 287474234,
            "range": "± 16809411",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 63467713,
            "range": "± 3274879",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 19304049,
            "range": "± 835699",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 58564919,
            "range": "± 2744930",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 62957075,
            "range": "± 4177533",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17928029,
            "range": "± 919857",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3275212,
            "range": "± 98965",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3238454,
            "range": "± 161918",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "9fad013dd15eb50158c920380cf8ab201062565f",
          "message": "Replace git dependency with workspace sibling\n\nFixes the build",
          "timestamp": "2021-11-08T19:06:55Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9fad013dd15eb50158c920380cf8ab201062565f"
        },
        "date": 1636429738054,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 351336,
            "range": "± 12361",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199442165,
            "range": "± 7643605",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 281181228,
            "range": "± 20651443",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 58589686,
            "range": "± 2684464",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 18682810,
            "range": "± 948699",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 55494682,
            "range": "± 2532703",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57400085,
            "range": "± 3856721",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17505465,
            "range": "± 827825",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2995559,
            "range": "± 119419",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3038978,
            "range": "± 139344",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "f547e90838baf935e57d91bea936dd9bfa48d75d",
          "message": "Use slightly more efficient implementation of Once [ci-bench]",
          "timestamp": "2021-11-09T16:50:29-08:00",
          "tree_id": "a86f19ae77297468dfb264537b5a83a9e8380470",
          "url": "https://github.com/hydro-project/hydroflow/commit/f547e90838baf935e57d91bea936dd9bfa48d75d"
        },
        "date": 1636506012033,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 364215,
            "range": "± 23435",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 232056788,
            "range": "± 7607168",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 247080725,
            "range": "± 9422736",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 67923904,
            "range": "± 3865799",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 16295963,
            "range": "± 949107",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53846196,
            "range": "± 2969828",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 59611282,
            "range": "± 3168548",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16707325,
            "range": "± 1156284",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3072453,
            "range": "± 137700",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3254752,
            "range": "± 184070",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f547e90838baf935e57d91bea936dd9bfa48d75d",
          "message": "Use slightly more efficient implementation of Once [ci-bench]",
          "timestamp": "2021-11-10T00:34:50Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f547e90838baf935e57d91bea936dd9bfa48d75d"
        },
        "date": 1636516141871,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 352363,
            "range": "± 17111",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 192098408,
            "range": "± 6084678",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 240505903,
            "range": "± 18983000",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 58219275,
            "range": "± 2241822",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 16826707,
            "range": "± 873721",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53133057,
            "range": "± 1852578",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56919657,
            "range": "± 3402348",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16976342,
            "range": "± 895038",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2998460,
            "range": "± 113413",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3055243,
            "range": "± 100528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "committer": {
            "email": "mingwei.samuel@gmail.com",
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel"
          },
          "distinct": true,
          "id": "9ba809bd6b1d48bff1136bc14833712395eb9d36",
          "message": "Revert \"Use slightly more efficient implementation of Once [ci-bench]\"\n\nThis reverts commit f547e90838baf935e57d91bea936dd9bfa48d75d.",
          "timestamp": "2021-11-10T14:57:32-08:00",
          "tree_id": "a9235c8d07e792d5a0d1b2b55ea4204800d17d3b",
          "url": "https://github.com/hydro-project/hydroflow/commit/9ba809bd6b1d48bff1136bc14833712395eb9d36"
        },
        "date": 1636585603490,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375616,
            "range": "± 2727",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200402310,
            "range": "± 438035",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 195010937,
            "range": "± 1833938",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 58760929,
            "range": "± 294352",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13934138,
            "range": "± 44386",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46517454,
            "range": "± 99613",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47347617,
            "range": "± 537838",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685920,
            "range": "± 9436",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2627347,
            "range": "± 2577",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2585773,
            "range": "± 2446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "6bbbaf200f765973573f1df1b92462b57f184248",
          "message": "Make Handoff trait take shared &self",
          "timestamp": "2021-11-10T22:52:24Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/6bbbaf200f765973573f1df1b92462b57f184248"
        },
        "date": 1636602489251,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376040,
            "range": "± 2758",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206701990,
            "range": "± 996094",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 204793616,
            "range": "± 1927904",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 70167446,
            "range": "± 360901",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12840298,
            "range": "± 61030",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 49684445,
            "range": "± 265018",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 62387941,
            "range": "± 796548",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14706223,
            "range": "± 9326",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2779590,
            "range": "± 22665",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2667410,
            "range": "± 13822",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "d40c1b8789630c987f7f7605ddd21421eaf9aaee",
          "message": "Replace concrete Subgraph types with FnMut()\n\nAlso removes a few more unneccesary `&mut`s",
          "timestamp": "2021-11-11T18:33:41Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d40c1b8789630c987f7f7605ddd21421eaf9aaee"
        },
        "date": 1636688876722,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 331951,
            "range": "± 2772",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 187530209,
            "range": "± 3913182",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 190190897,
            "range": "± 9033812",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/teer",
            "value": 63848309,
            "range": "± 670046",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12493760,
            "range": "± 54563",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42918733,
            "range": "± 2402235",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57405632,
            "range": "± 969137",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12976639,
            "range": "± 5364",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2736909,
            "range": "± 53908",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2709776,
            "range": "± 25708",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "dd3b77425f8511a80ca62672c552aa8a49ce7b90",
          "message": "Change handoffs to be owned by Hydroflow, use dyn Any casts\n\nNotes\n- TeeingHandoff is commented out (TODO).\n- Variadic generics require GATs now due to reference in args.",
          "timestamp": "2021-11-11T18:04:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/dd3b77425f8511a80ca62672c552aa8a49ce7b90"
        },
        "date": 1636702293332,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 383527,
            "range": "± 20231",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206450818,
            "range": "± 6322456",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 260838034,
            "range": "± 17830302",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11615771,
            "range": "± 746730",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 54361126,
            "range": "± 4185367",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 51314888,
            "range": "± 5182038",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18013484,
            "range": "± 1001173",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3210575,
            "range": "± 209622",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3175314,
            "range": "± 196468",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "dd3b77425f8511a80ca62672c552aa8a49ce7b90",
          "message": "Change handoffs to be owned by Hydroflow, use dyn Any casts\n\nNotes\n- TeeingHandoff is commented out (TODO).\n- Variadic generics require GATs now due to reference in args.",
          "timestamp": "2021-11-11T18:04:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/dd3b77425f8511a80ca62672c552aa8a49ce7b90"
        },
        "date": 1636704816075,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375929,
            "range": "± 2499",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199188480,
            "range": "± 926167",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 189267466,
            "range": "± 3562338",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8350521,
            "range": "± 46447",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44975973,
            "range": "± 179244",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50270554,
            "range": "± 1821803",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14694104,
            "range": "± 7593",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2591817,
            "range": "± 3798",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2563773,
            "range": "± 4248",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1c70cf861b20b88ec648f968cc7ca1581bd20c9c",
          "message": "Allow creating an input operator from an existing channel (#12)",
          "timestamp": "2021-11-12T17:54:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1c70cf861b20b88ec648f968cc7ca1581bd20c9c"
        },
        "date": 1636775262179,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 331945,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 192510714,
            "range": "± 1315232",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 179502770,
            "range": "± 4101859",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7597785,
            "range": "± 35278",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44619637,
            "range": "± 217931",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47607149,
            "range": "± 387945",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12964236,
            "range": "± 4633",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2666219,
            "range": "± 3872",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2322945,
            "range": "± 6047",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1c70cf861b20b88ec648f968cc7ca1581bd20c9c",
          "message": "Allow creating an input operator from an existing channel (#12)",
          "timestamp": "2021-11-12T17:54:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1c70cf861b20b88ec648f968cc7ca1581bd20c9c"
        },
        "date": 1636861629387,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 352447,
            "range": "± 25047",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 185304892,
            "range": "± 3577061",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 172014315,
            "range": "± 8339216",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 6859060,
            "range": "± 321685",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41207940,
            "range": "± 2737858",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 43390793,
            "range": "± 1412784",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 13831057,
            "range": "± 554135",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2493489,
            "range": "± 113105",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2503476,
            "range": "± 128010",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1c70cf861b20b88ec648f968cc7ca1581bd20c9c",
          "message": "Allow creating an input operator from an existing channel (#12)",
          "timestamp": "2021-11-12T17:54:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1c70cf861b20b88ec648f968cc7ca1581bd20c9c"
        },
        "date": 1636948069228,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376248,
            "range": "± 2839",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 204169217,
            "range": "± 5019175",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 194724989,
            "range": "± 4021654",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7606413,
            "range": "± 95258",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46182577,
            "range": "± 626898",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61716236,
            "range": "± 1405424",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14710342,
            "range": "± 6971",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2708421,
            "range": "± 34083",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2598789,
            "range": "± 20572",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "489773675ca56c4edfa6acd21135c39490c0fcc9",
          "message": "Rename OpId to SubgraphId and update variables for consistent terminology",
          "timestamp": "2021-11-12T18:03:18Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/489773675ca56c4edfa6acd21135c39490c0fcc9"
        },
        "date": 1637034469862,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 371837,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 196784561,
            "range": "± 707817",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 185511814,
            "range": "± 2107882",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8095346,
            "range": "± 18428",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43895649,
            "range": "± 273367",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48000436,
            "range": "± 328335",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14681458,
            "range": "± 5730",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2612215,
            "range": "± 3253",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2562330,
            "range": "± 13986",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "489773675ca56c4edfa6acd21135c39490c0fcc9",
          "message": "Rename OpId to SubgraphId and update variables for consistent terminology",
          "timestamp": "2021-11-12T18:03:18Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/489773675ca56c4edfa6acd21135c39490c0fcc9"
        },
        "date": 1637120970348,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 263522,
            "range": "± 3290",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 163745155,
            "range": "± 932586",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 152462340,
            "range": "± 7380765",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8168600,
            "range": "± 25772",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40022327,
            "range": "± 269349",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57419381,
            "range": "± 361115",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18221630,
            "range": "± 14533",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2847485,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2777866,
            "range": "± 2155",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "9db3b81b191fde45dac4c0641f7e660a7f7e9af9",
          "message": "Remove handoff-style state connecting, instead use StateHandle as pointers with Context<'_>",
          "timestamp": "2021-11-17T02:41:44Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9db3b81b191fde45dac4c0641f7e660a7f7e9af9"
        },
        "date": 1637207345562,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 387224,
            "range": "± 20019",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 208972639,
            "range": "± 4367876",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 259337132,
            "range": "± 27228973",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11854548,
            "range": "± 446966",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53017709,
            "range": "± 1923706",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 59273694,
            "range": "± 2673256",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18136141,
            "range": "± 702556",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3222574,
            "range": "± 193910",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3228859,
            "range": "± 132644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "9db3b81b191fde45dac4c0641f7e660a7f7e9af9",
          "message": "Remove handoff-style state connecting, instead use StateHandle as pointers with Context<'_>",
          "timestamp": "2021-11-17T02:41:44Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9db3b81b191fde45dac4c0641f7e660a7f7e9af9"
        },
        "date": 1637256796213,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375293,
            "range": "± 3587",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 188847485,
            "range": "± 528448",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 174303655,
            "range": "± 7571912",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8687136,
            "range": "± 34179",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44347634,
            "range": "± 168199",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 49848359,
            "range": "± 932518",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14690997,
            "range": "± 37543",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2613015,
            "range": "± 5765",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2597745,
            "range": "± 1779",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "9db3b81b191fde45dac4c0641f7e660a7f7e9af9",
          "message": "Remove handoff-style state connecting, instead use StateHandle as pointers with Context<'_>",
          "timestamp": "2021-11-17T02:41:44Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9db3b81b191fde45dac4c0641f7e660a7f7e9af9"
        },
        "date": 1637293666387,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374929,
            "range": "± 2540",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198874117,
            "range": "± 461393",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 185884990,
            "range": "± 1630015",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8286342,
            "range": "± 77113",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44181432,
            "range": "± 140655",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48102249,
            "range": "± 327284",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14683574,
            "range": "± 8405",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2605602,
            "range": "± 2417",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2570690,
            "range": "± 2216",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "246d437f15437ff258ae835fa49b922d82892c63",
          "message": "Add distributed Covid tracing app (#15)\n\nThis is a very rough first take of a Hydroflow app that crosses network\r\nboundaries. Lots of stuff is bad here: the abstractions are wonky, the encoding\r\nallocates too much, the message-passing is fragile, but I wanted to get this\r\nmerged so that stuff could be improved incrementally as we figure out what\r\nactually good abstractions are here.",
          "timestamp": "2021-11-19T20:21:23Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/246d437f15437ff258ae835fa49b922d82892c63"
        },
        "date": 1637380030902,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375663,
            "range": "± 2452",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 189310015,
            "range": "± 726434",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 164231741,
            "range": "± 1214703",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8273995,
            "range": "± 37284",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39690260,
            "range": "± 361739",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48005362,
            "range": "± 168746",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12985684,
            "range": "± 809194",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2635228,
            "range": "± 2064",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2346798,
            "range": "± 2933",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "246d437f15437ff258ae835fa49b922d82892c63",
          "message": "Add distributed Covid tracing app (#15)\n\nThis is a very rough first take of a Hydroflow app that crosses network\r\nboundaries. Lots of stuff is bad here: the abstractions are wonky, the encoding\r\nallocates too much, the message-passing is fragile, but I wanted to get this\r\nmerged so that stuff could be improved incrementally as we figure out what\r\nactually good abstractions are here.",
          "timestamp": "2021-11-19T20:21:23Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/246d437f15437ff258ae835fa49b922d82892c63"
        },
        "date": 1637466467317,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 370561,
            "range": "± 2499",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198948484,
            "range": "± 538365",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 188135007,
            "range": "± 4141699",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8732330,
            "range": "± 27062",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44094370,
            "range": "± 294364",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48837023,
            "range": "± 667986",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685785,
            "range": "± 7819",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2623496,
            "range": "± 2216",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2621760,
            "range": "± 5129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "246d437f15437ff258ae835fa49b922d82892c63",
          "message": "Add distributed Covid tracing app (#15)\n\nThis is a very rough first take of a Hydroflow app that crosses network\r\nboundaries. Lots of stuff is bad here: the abstractions are wonky, the encoding\r\nallocates too much, the message-passing is fragile, but I wanted to get this\r\nmerged so that stuff could be improved incrementally as we figure out what\r\nactually good abstractions are here.",
          "timestamp": "2021-11-19T20:21:23Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/246d437f15437ff258ae835fa49b922d82892c63"
        },
        "date": 1637552844802,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261075,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 165306173,
            "range": "± 1149124",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 155049983,
            "range": "± 1671627",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8339029,
            "range": "± 39615",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39695795,
            "range": "± 160958",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57339389,
            "range": "± 60651",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18213134,
            "range": "± 21975",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2853959,
            "range": "± 14016",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2832728,
            "range": "± 2963",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f4960876e0a18ba484baef6192a2c0dcdf5d5224",
          "message": "Extract out turning a TcpStream into operators (#16)",
          "timestamp": "2021-11-22T23:18:39Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f4960876e0a18ba484baef6192a2c0dcdf5d5224"
        },
        "date": 1637639266106,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261659,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 168705712,
            "range": "± 794282",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 155907366,
            "range": "± 3816694",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8125513,
            "range": "± 57694",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39439741,
            "range": "± 380989",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57822368,
            "range": "± 1133367",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18230254,
            "range": "± 11297",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2816983,
            "range": "± 27088",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2849145,
            "range": "± 3752",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f4960876e0a18ba484baef6192a2c0dcdf5d5224",
          "message": "Extract out turning a TcpStream into operators (#16)",
          "timestamp": "2021-11-22T23:18:39Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f4960876e0a18ba484baef6192a2c0dcdf5d5224"
        },
        "date": 1637725665993,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 268051,
            "range": "± 5324",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 163496392,
            "range": "± 785666",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 153211315,
            "range": "± 4759245",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8154498,
            "range": "± 22561",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39772983,
            "range": "± 258956",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57334961,
            "range": "± 154209",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18212036,
            "range": "± 15220",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2811340,
            "range": "± 3563",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2843232,
            "range": "± 1801",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce",
          "message": "Eliminate some copies and batch networks sends (#17)\n\nThis implementation still has some extra copies, and doesn't re-use buffers\r\nappropriately. In addition it still just encodes in JSON since that makes it a\r\nbit easier to debug over the wire.",
          "timestamp": "2021-11-24T19:03:14Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce"
        },
        "date": 1637812094728,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 451044,
            "range": "± 2949",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 212986225,
            "range": "± 6810371",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 201366036,
            "range": "± 2723670",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10046524,
            "range": "± 198329",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 50489677,
            "range": "± 1208445",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55194918,
            "range": "± 1157947",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16702414,
            "range": "± 358988",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3076872,
            "range": "± 45351",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3042095,
            "range": "± 53593",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce",
          "message": "Eliminate some copies and batch networks sends (#17)\n\nThis implementation still has some extra copies, and doesn't re-use buffers\r\nappropriately. In addition it still just encodes in JSON since that makes it a\r\nbit easier to debug over the wire.",
          "timestamp": "2021-11-24T19:03:14Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce"
        },
        "date": 1637898518637,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 371055,
            "range": "± 23432",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 227360458,
            "range": "± 10020985",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 223822367,
            "range": "± 11358765",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9834093,
            "range": "± 526002",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53580852,
            "range": "± 4287092",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 59741609,
            "range": "± 3098348",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17050664,
            "range": "± 1034140",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2900744,
            "range": "± 184001",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3015487,
            "range": "± 197265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce",
          "message": "Eliminate some copies and batch networks sends (#17)\n\nThis implementation still has some extra copies, and doesn't re-use buffers\r\nappropriately. In addition it still just encodes in JSON since that makes it a\r\nbit easier to debug over the wire.",
          "timestamp": "2021-11-24T19:03:14Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce"
        },
        "date": 1637984881363,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375797,
            "range": "± 2706",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199768892,
            "range": "± 1218122",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 190131419,
            "range": "± 1597856",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8781746,
            "range": "± 52200",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44456584,
            "range": "± 148062",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 49132079,
            "range": "± 731890",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14687325,
            "range": "± 7820",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2604886,
            "range": "± 4995",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2617537,
            "range": "± 1784",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce",
          "message": "Eliminate some copies and batch networks sends (#17)\n\nThis implementation still has some extra copies, and doesn't re-use buffers\r\nappropriately. In addition it still just encodes in JSON since that makes it a\r\nbit easier to debug over the wire.",
          "timestamp": "2021-11-24T19:03:14Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce"
        },
        "date": 1638071349094,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 389912,
            "range": "± 24613",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 230542851,
            "range": "± 5124465",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 231730129,
            "range": "± 5075936",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10582870,
            "range": "± 455772",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 56217338,
            "range": "± 2302246",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 65009047,
            "range": "± 4054486",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18637329,
            "range": "± 646383",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3314413,
            "range": "± 133268",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3332785,
            "range": "± 138965",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce",
          "message": "Eliminate some copies and batch networks sends (#17)\n\nThis implementation still has some extra copies, and doesn't re-use buffers\r\nappropriately. In addition it still just encodes in JSON since that makes it a\r\nbit easier to debug over the wire.",
          "timestamp": "2021-11-24T19:03:14Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8fc5a4d0b4e6e01d4b83e6708425a44ebc4272ce"
        },
        "date": 1638157679898,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 431212,
            "range": "± 13100",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 209370191,
            "range": "± 1839859",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 197786555,
            "range": "± 6160261",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10071903,
            "range": "± 229402",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 49744210,
            "range": "± 1449423",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55472159,
            "range": "± 1606688",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17219340,
            "range": "± 451383",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2976701,
            "range": "± 64668",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3095154,
            "range": "± 38205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "418803b7c86a0ebe0cf29ebec47c99108afc1cee",
          "message": "Push some of the networking stuff into a library (#18)",
          "timestamp": "2021-11-29T19:26:12Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/418803b7c86a0ebe0cf29ebec47c99108afc1cee"
        },
        "date": 1638243999801,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375914,
            "range": "± 2555",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200185012,
            "range": "± 1016955",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 193502972,
            "range": "± 4090012",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7749254,
            "range": "± 104958",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46988653,
            "range": "± 1704957",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 51457394,
            "range": "± 1813379",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14693097,
            "range": "± 5983",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2853352,
            "range": "± 19643",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2817765,
            "range": "± 126631",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "418803b7c86a0ebe0cf29ebec47c99108afc1cee",
          "message": "Push some of the networking stuff into a library (#18)",
          "timestamp": "2021-11-29T19:26:12Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/418803b7c86a0ebe0cf29ebec47c99108afc1cee"
        },
        "date": 1638330538792,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 350368,
            "range": "± 34047",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 226195797,
            "range": "± 7245519",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 234500229,
            "range": "± 12110701",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11063096,
            "range": "± 656248",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 51484297,
            "range": "± 2000677",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 60235131,
            "range": "± 2903781",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16653728,
            "range": "± 883507",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3408084,
            "range": "± 193714",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3436748,
            "range": "± 242408",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "852371ff6bc52f7e64ce81879bccab2ee9fa381e",
          "message": "Update all hydroflow subgraphs to take a Context<'_>",
          "timestamp": "2021-12-01T23:37:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/852371ff6bc52f7e64ce81879bccab2ee9fa381e"
        },
        "date": 1638416871160,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375605,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195847048,
            "range": "± 1084830",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 187100172,
            "range": "± 1546327",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8109639,
            "range": "± 87072",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47605618,
            "range": "± 1207616",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48241380,
            "range": "± 1820697",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14681492,
            "range": "± 10023",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2826169,
            "range": "± 66589",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2805103,
            "range": "± 21394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7f29ae98473dddda1c3225a91b8e87da8c4b1bab",
          "message": "Remove tokio runtime, use Context<'_>'s Waker for networking",
          "timestamp": "2021-12-02T18:59:38Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7f29ae98473dddda1c3225a91b8e87da8c4b1bab"
        },
        "date": 1638503270909,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 370716,
            "range": "± 2526",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 196416287,
            "range": "± 1015327",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 191462516,
            "range": "± 3139029",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8828252,
            "range": "± 59723",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43723155,
            "range": "± 191576",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47692036,
            "range": "± 1234178",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14683321,
            "range": "± 7563",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2737719,
            "range": "± 8969",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2666421,
            "range": "± 7709",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7f29ae98473dddda1c3225a91b8e87da8c4b1bab",
          "message": "Remove tokio runtime, use Context<'_>'s Waker for networking",
          "timestamp": "2021-12-02T18:59:38Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7f29ae98473dddda1c3225a91b8e87da8c4b1bab"
        },
        "date": 1638589686897,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375759,
            "range": "± 2447",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200132678,
            "range": "± 698269",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 190787915,
            "range": "± 1567888",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8462963,
            "range": "± 69397",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44441597,
            "range": "± 212190",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50874085,
            "range": "± 1101752",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14696164,
            "range": "± 23455",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2626425,
            "range": "± 19459",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2624652,
            "range": "± 2537",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7f29ae98473dddda1c3225a91b8e87da8c4b1bab",
          "message": "Remove tokio runtime, use Context<'_>'s Waker for networking",
          "timestamp": "2021-12-02T18:59:38Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7f29ae98473dddda1c3225a91b8e87da8c4b1bab"
        },
        "date": 1638676083306,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375630,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195769308,
            "range": "± 377105",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 185452953,
            "range": "± 5097526",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7422661,
            "range": "± 14062",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43526507,
            "range": "± 164210",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48057285,
            "range": "± 274783",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685373,
            "range": "± 9183",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2584949,
            "range": "± 2361",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2581566,
            "range": "± 14250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7f29ae98473dddda1c3225a91b8e87da8c4b1bab",
          "message": "Remove tokio runtime, use Context<'_>'s Waker for networking",
          "timestamp": "2021-12-02T18:59:38Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7f29ae98473dddda1c3225a91b8e87da8c4b1bab"
        },
        "date": 1638762554370,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 377465,
            "range": "± 18575",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 231106014,
            "range": "± 7600119",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 235716872,
            "range": "± 5305434",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10559606,
            "range": "± 942114",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 52272377,
            "range": "± 2773443",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 62826852,
            "range": "± 3601334",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17733712,
            "range": "± 694898",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3153109,
            "range": "± 192000",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3177103,
            "range": "± 139368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7f29ae98473dddda1c3225a91b8e87da8c4b1bab",
          "message": "Remove tokio runtime, use Context<'_>'s Waker for networking",
          "timestamp": "2021-12-02T18:59:38Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7f29ae98473dddda1c3225a91b8e87da8c4b1bab"
        },
        "date": 1638848894422,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 271254,
            "range": "± 5656",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 164273297,
            "range": "± 1452248",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 154714946,
            "range": "± 4303488",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8675994,
            "range": "± 33155",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39701518,
            "range": "± 247532",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57564326,
            "range": "± 126514",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18216630,
            "range": "± 18347",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2820718,
            "range": "± 3237",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2804751,
            "range": "± 1907",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5dab68b90a4892120e34fddebdec4fb094adb523",
          "message": "Add a basic implementation of relational algebra (#23)\n\nThis is a WIP implementation of relational algebra that runs in Hydroflow.\r\n\r\nRight now it only uses scheduled components and is only at runtime, no codegen,\r\njust for simplicity. It's also not how I would design a non-proof-of-concept IR\r\nbut I think for our purposes for now it will be fine.",
          "timestamp": "2021-12-07T18:48:13Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/5dab68b90a4892120e34fddebdec4fb094adb523"
        },
        "date": 1638935320787,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 436924,
            "range": "± 6652",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 209765941,
            "range": "± 1597314",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 182947538,
            "range": "± 4466322",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9590119,
            "range": "± 116987",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 50115542,
            "range": "± 517830",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55392749,
            "range": "± 710221",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17064224,
            "range": "± 202164",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3049236,
            "range": "± 32536",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2971586,
            "range": "± 28395",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "964de20560c5bc856ad6c3e5216fe58f309e0a17",
          "message": "Add a simple codegen path for relational algebra (#24)\n\nThis currenly only handles some very simple patterns, and doesn't invoke\r\nscheduled components at all, but this is the general pattern I was thinking for\r\nnow. Comments on the overall design welcome, you can see examples of the\r\ngenerated code in testdata/compile/compile.\r\n\r\nWhat's more, I think this PR will probably fail on CI since it shells out to\r\nrustfmt to format the generated code. Suggestions welcome for how to fix, I\r\nmight just make it skip running the test (probably with a warning) if rustfmt\r\ndoes not just work.\r\n\r\nNext step is to introduce a let binding layer to the language, to force the\r\ncodegen to use scheduled components/invoke Hydroflow.",
          "timestamp": "2021-12-08T20:48:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/964de20560c5bc856ad6c3e5216fe58f309e0a17"
        },
        "date": 1639021678572,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 274542,
            "range": "± 6763",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 164693135,
            "range": "± 572441",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 154730601,
            "range": "± 3221008",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8067106,
            "range": "± 15296",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40076250,
            "range": "± 188232",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57638332,
            "range": "± 96551",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18209264,
            "range": "± 97726",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2853006,
            "range": "± 4880",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2833171,
            "range": "± 3034",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "359b1625a19566ef8eff5cb6f6d742ebb99ba8e3",
          "message": "rename tlt! macro to tt!",
          "timestamp": "2021-12-09T23:09:54Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/359b1625a19566ef8eff5cb6f6d742ebb99ba8e3"
        },
        "date": 1639108109805,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 420363,
            "range": "± 11418",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206168820,
            "range": "± 2325578",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 192613834,
            "range": "± 2420509",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9873845,
            "range": "± 221126",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 48778454,
            "range": "± 1117651",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 53490751,
            "range": "± 1794506",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17992819,
            "range": "± 590697",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2882444,
            "range": "± 106610",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2823713,
            "range": "± 83349",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "359b1625a19566ef8eff5cb6f6d742ebb99ba8e3",
          "message": "rename tlt! macro to tt!",
          "timestamp": "2021-12-09T23:09:54Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/359b1625a19566ef8eff5cb6f6d742ebb99ba8e3"
        },
        "date": 1639194468243,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 305583,
            "range": "± 8670",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 165447830,
            "range": "± 848865",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 153692587,
            "range": "± 1464137",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8793940,
            "range": "± 37854",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39656519,
            "range": "± 567546",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57711445,
            "range": "± 198060",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15865402,
            "range": "± 214265",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2871156,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2783932,
            "range": "± 15575",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "359b1625a19566ef8eff5cb6f6d742ebb99ba8e3",
          "message": "rename tlt! macro to tt!",
          "timestamp": "2021-12-09T23:09:54Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/359b1625a19566ef8eff5cb6f6d742ebb99ba8e3"
        },
        "date": 1639280877104,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375972,
            "range": "± 2789",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199025960,
            "range": "± 506270",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 190597752,
            "range": "± 3776681",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7884275,
            "range": "± 84289",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44527715,
            "range": "± 75246",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 53781797,
            "range": "± 1073934",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15920305,
            "range": "± 6695",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2657553,
            "range": "± 25929",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2600260,
            "range": "± 2893",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "359b1625a19566ef8eff5cb6f6d742ebb99ba8e3",
          "message": "rename tlt! macro to tt!",
          "timestamp": "2021-12-09T23:09:54Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/359b1625a19566ef8eff5cb6f6d742ebb99ba8e3"
        },
        "date": 1639367278656,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 371502,
            "range": "± 2529",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 187774883,
            "range": "± 1071812",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 182704377,
            "range": "± 1410114",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7433829,
            "range": "± 8825",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44637681,
            "range": "± 654195",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48496890,
            "range": "± 440369",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14684210,
            "range": "± 8848",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2655807,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2585677,
            "range": "± 2099",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "359b1625a19566ef8eff5cb6f6d742ebb99ba8e3",
          "message": "rename tlt! macro to tt!",
          "timestamp": "2021-12-09T23:09:54Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/359b1625a19566ef8eff5cb6f6d742ebb99ba8e3"
        },
        "date": 1639453709405,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 400444,
            "range": "± 26233",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 214437420,
            "range": "± 2239560",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 183097218,
            "range": "± 5396483",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9471417,
            "range": "± 526492",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 52140466,
            "range": "± 1119551",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57808201,
            "range": "± 1250787",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17137119,
            "range": "± 502923",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3083901,
            "range": "± 81227",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3033512,
            "range": "± 30370",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "cd8ecacaa1d1c09bb831f3d10f7c3d2c240b6b88",
          "message": "Make CI check all targets",
          "timestamp": "2021-12-15T23:25:24Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/cd8ecacaa1d1c09bb831f3d10f7c3d2c240b6b88"
        },
        "date": 1639626391513,
        "tool": "cargo",
        "benches": [
          {
            "name": "fan_in/hydroflow",
            "value": 163048551,
            "range": "± 781979",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 154031008,
            "range": "± 8721194",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8913618,
            "range": "± 48888",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39412455,
            "range": "± 169398",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57238715,
            "range": "± 196488",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2987352,
            "range": "± 3954",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1639712888009,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 458649,
            "range": "± 32895",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 216824716,
            "range": "± 702141",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 203317702,
            "range": "± 1711404",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10467668,
            "range": "± 62418",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 52058253,
            "range": "± 445771",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56801326,
            "range": "± 899160",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17585934,
            "range": "± 108686",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3184920,
            "range": "± 93708",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3137549,
            "range": "± 27457",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1639799345380,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374950,
            "range": "± 27492",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 230193276,
            "range": "± 6246239",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 233975809,
            "range": "± 7391161",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11491312,
            "range": "± 637696",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53236986,
            "range": "± 6425333",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 60410304,
            "range": "± 2809571",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18489033,
            "range": "± 974881",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3256461,
            "range": "± 120683",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3151976,
            "range": "± 198528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1639885635221,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375643,
            "range": "± 2743",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 197440404,
            "range": "± 756147",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 188716200,
            "range": "± 1949947",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8281114,
            "range": "± 34809",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 38138201,
            "range": "± 136361",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 41741567,
            "range": "± 406394",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12865883,
            "range": "± 77933",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2328677,
            "range": "± 19732",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2308849,
            "range": "± 12588",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1639972083181,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376271,
            "range": "± 3077",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 203646782,
            "range": "± 798798",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 195004217,
            "range": "± 1297055",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8340965,
            "range": "± 57374",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47567093,
            "range": "± 542751",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61987555,
            "range": "± 1491777",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14708454,
            "range": "± 7796",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2680154,
            "range": "± 20199",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2638028,
            "range": "± 17891",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640058523456,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 368976,
            "range": "± 31444",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 201457226,
            "range": "± 6552523",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 244493823,
            "range": "± 23030730",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10686360,
            "range": "± 799477",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 49971878,
            "range": "± 2282964",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55463860,
            "range": "± 2908218",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17393785,
            "range": "± 985921",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3016128,
            "range": "± 174394",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3037168,
            "range": "± 226657",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640144914084,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 444226,
            "range": "± 5956",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 227108869,
            "range": "± 6494045",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 205702446,
            "range": "± 3999157",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9970405,
            "range": "± 637352",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 54782200,
            "range": "± 5768228",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57363415,
            "range": "± 1341981",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17426818,
            "range": "± 281440",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3299664,
            "range": "± 203905",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3104371,
            "range": "± 7396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640231235230,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261813,
            "range": "± 4541",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 165623821,
            "range": "± 752410",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 157603057,
            "range": "± 3808357",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8856234,
            "range": "± 48963",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42333566,
            "range": "± 218511",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57610836,
            "range": "± 57203",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18205962,
            "range": "± 70832",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2868879,
            "range": "± 6593",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2857377,
            "range": "± 3033",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640317698843,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375634,
            "range": "± 2551",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200699106,
            "range": "± 646386",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 186403691,
            "range": "± 4557194",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8619629,
            "range": "± 32878",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43622730,
            "range": "± 211807",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48136696,
            "range": "± 697384",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14681598,
            "range": "± 10620",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2708719,
            "range": "± 21176",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2704463,
            "range": "± 5603",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640404057195,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374719,
            "range": "± 2919",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 197564875,
            "range": "± 742014",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 187489247,
            "range": "± 2331442",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8766042,
            "range": "± 33749",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43842076,
            "range": "± 198321",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48462882,
            "range": "± 613906",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14691140,
            "range": "± 83306",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2623320,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2588253,
            "range": "± 1600",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640490458830,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376314,
            "range": "± 2751",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195531616,
            "range": "± 1017383",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 190623158,
            "range": "± 2890171",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8905521,
            "range": "± 35343",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44862433,
            "range": "± 395998",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 58718855,
            "range": "± 2357002",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14715941,
            "range": "± 47647",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2739361,
            "range": "± 13996",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2683811,
            "range": "± 11478",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640663235009,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375698,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 187413715,
            "range": "± 588748",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 186524382,
            "range": "± 2333624",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7873912,
            "range": "± 67751",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42843366,
            "range": "± 158218",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48548232,
            "range": "± 406677",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685675,
            "range": "± 5799",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2656508,
            "range": "± 4692",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2626898,
            "range": "± 3717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640749684655,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 357171,
            "range": "± 13331",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 228688408,
            "range": "± 4711338",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 221049139,
            "range": "± 8069776",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9961672,
            "range": "± 501197",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 53160097,
            "range": "± 4066816",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 63899845,
            "range": "± 3597301",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16992507,
            "range": "± 767976",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3156317,
            "range": "± 171843",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3121582,
            "range": "± 140423",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640836077428,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 364027,
            "range": "± 19632",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 223633631,
            "range": "± 5951576",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 215013227,
            "range": "± 6517257",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9929310,
            "range": "± 432282",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 48210242,
            "range": "± 3307140",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 60331076,
            "range": "± 2936425",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16668950,
            "range": "± 846924",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3253795,
            "range": "± 214248",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3268029,
            "range": "± 216241",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1640922453454,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374726,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 196665747,
            "range": "± 922218",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 186702977,
            "range": "± 2009290",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8201553,
            "range": "± 34057",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43860554,
            "range": "± 107766",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47552308,
            "range": "± 302774",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14674882,
            "range": "± 10966",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2680188,
            "range": "± 15219",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2673355,
            "range": "± 2233",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1641008865443,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375600,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 196591591,
            "range": "± 560313",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 183316135,
            "range": "± 10617277",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7849610,
            "range": "± 16465",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43215799,
            "range": "± 97035",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47551373,
            "range": "± 93519",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14679726,
            "range": "± 12323",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2689400,
            "range": "± 2809",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2669694,
            "range": "± 1967",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1641095260703,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 372203,
            "range": "± 2514",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 205105312,
            "range": "± 2760359",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 193531951,
            "range": "± 3433045",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8598279,
            "range": "± 16631",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46989347,
            "range": "± 236147",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 65259432,
            "range": "± 797581",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14701922,
            "range": "± 35416",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2935833,
            "range": "± 26267",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2899143,
            "range": "± 23078",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc48b7161821ac7945792b73f1a2427e6faa434c",
          "message": "Add a real networked test and polish the API a bit (#32)\n\nWe want to start moving towards a usable \"clustering\" API, so this is a first\r\nstep there to make networking a little simpler/cleaner, and pull some stuff out\r\nof the Hydroflow struct for now.",
          "timestamp": "2021-12-17T01:21:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/fc48b7161821ac7945792b73f1a2427e6faa434c"
        },
        "date": 1641181701512,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 451005,
            "range": "± 2781",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 219793375,
            "range": "± 1095762",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 203500520,
            "range": "± 4080130",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10584477,
            "range": "± 43474",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 51380777,
            "range": "± 585756",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57470408,
            "range": "± 1007441",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17394928,
            "range": "± 203568",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3219164,
            "range": "± 43854",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3394207,
            "range": "± 57219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "bcb63279e0980f9faa8ea0163eb66d218fa5df36",
          "message": "Fix clippy::drop_copy",
          "timestamp": "2022-01-03T18:41:42Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/bcb63279e0980f9faa8ea0163eb66d218fa5df36"
        },
        "date": 1641268045519,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 364837,
            "range": "± 22528",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206263083,
            "range": "± 5870570",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 188667189,
            "range": "± 7415492",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8536634,
            "range": "± 319396",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43282522,
            "range": "± 1677077",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 40862107,
            "range": "± 2558725",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15301667,
            "range": "± 523716",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2954594,
            "range": "± 165151",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2766623,
            "range": "± 119007",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "efdb647f87c3402477f48ef169e32c4f2b458d58",
          "message": "cross join (#33)\n\n* cross join\r\n\r\n* fix linter errors\r\n\r\n* more linter cleanup\r\n\r\n* address clones in crossjoin\r\n\r\n* change CrossJoin to RippleJoin\r\n\r\n* satisfy linter\r\n\r\n* make clippy accept uncollapsed else if for readability",
          "timestamp": "2022-01-04T16:55:23Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/efdb647f87c3402477f48ef169e32c4f2b458d58"
        },
        "date": 1641354472324,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375638,
            "range": "± 3612",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195692727,
            "range": "± 624072",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 185424271,
            "range": "± 1500196",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9605167,
            "range": "± 34737",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43114970,
            "range": "± 71660",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47783076,
            "range": "± 120843",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14678383,
            "range": "± 11229",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2703172,
            "range": "± 2168",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2702701,
            "range": "± 1846",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1b5dcb5953221e0224f3fac9880650f0715915a8",
          "message": "Add more primitives to construct more complex graphs (#34)\n\nThis commit introduces some tools for more complex topologies and add a test\r\nthat has multiple graphs coordinating. I don't really like how much boilerplate\r\nis involved in the setup of this graph but I think it's a good starting point\r\nto figure out what these abstractions should look like.",
          "timestamp": "2022-01-06T01:16:31Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1b5dcb5953221e0224f3fac9880650f0715915a8"
        },
        "date": 1641440906822,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 409811,
            "range": "± 17626",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206455511,
            "range": "± 5310018",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 191696786,
            "range": "± 6061021",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8140710,
            "range": "± 282079",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 45125612,
            "range": "± 2012638",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 52561301,
            "range": "± 2209727",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15472047,
            "range": "± 485907",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3118163,
            "range": "± 70672",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3114362,
            "range": "± 59736",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1b5dcb5953221e0224f3fac9880650f0715915a8",
          "message": "Add more primitives to construct more complex graphs (#34)\n\nThis commit introduces some tools for more complex topologies and add a test\r\nthat has multiple graphs coordinating. I don't really like how much boilerplate\r\nis involved in the setup of this graph but I think it's a good starting point\r\nto figure out what these abstractions should look like.",
          "timestamp": "2022-01-06T01:16:31Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1b5dcb5953221e0224f3fac9880650f0715915a8"
        },
        "date": 1641527302805,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 372466,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 181958852,
            "range": "± 504888",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 180277682,
            "range": "± 1772509",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8384607,
            "range": "± 31236",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43718133,
            "range": "± 180210",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47898742,
            "range": "± 431185",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14688948,
            "range": "± 21183",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2758292,
            "range": "± 3195",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2736813,
            "range": "± 2348",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044",
          "message": "Add an echo server test (#37)\n\nStill rough around the edges, connect_tcp in particular is not quite right, but\r\nwanted to get this out there to unblock some stuff.",
          "timestamp": "2022-01-07T19:40:10Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044"
        },
        "date": 1641613685512,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375601,
            "range": "± 2765",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 191076181,
            "range": "± 719595",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 176343721,
            "range": "± 3443167",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8266893,
            "range": "± 32433",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43499351,
            "range": "± 91594",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47862911,
            "range": "± 115617",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14680449,
            "range": "± 11543",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2725611,
            "range": "± 2872",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2734419,
            "range": "± 8717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044",
          "message": "Add an echo server test (#37)\n\nStill rough around the edges, connect_tcp in particular is not quite right, but\r\nwanted to get this out there to unblock some stuff.",
          "timestamp": "2022-01-07T19:40:10Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044"
        },
        "date": 1641700076258,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 370131,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 194977724,
            "range": "± 355584",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 182709956,
            "range": "± 1315766",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8318795,
            "range": "± 20779",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42527492,
            "range": "± 67518",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47815003,
            "range": "± 246796",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14676584,
            "range": "± 123863",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2713137,
            "range": "± 3722",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2739710,
            "range": "± 1505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044",
          "message": "Add an echo server test (#37)\n\nStill rough around the edges, connect_tcp in particular is not quite right, but\r\nwanted to get this out there to unblock some stuff.",
          "timestamp": "2022-01-07T19:40:10Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044"
        },
        "date": 1641786464007,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 332234,
            "range": "± 14559",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 184882311,
            "range": "± 5779060",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 169704741,
            "range": "± 6256832",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8054574,
            "range": "± 208355",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40117264,
            "range": "± 2515741",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 42593152,
            "range": "± 1334837",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12904274,
            "range": "± 345915",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2345648,
            "range": "± 63999",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2418959,
            "range": "± 57621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044",
          "message": "Add an echo server test (#37)\n\nStill rough around the edges, connect_tcp in particular is not quite right, but\r\nwanted to get this out there to unblock some stuff.",
          "timestamp": "2022-01-07T19:40:10Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/03fa27ba0a4c10ac9fa8fda1f021a839f5dcb044"
        },
        "date": 1641872887220,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 370520,
            "range": "± 3071",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 188681811,
            "range": "± 377790",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 178101776,
            "range": "± 2552964",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9102705,
            "range": "± 39133",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43208098,
            "range": "± 240932",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47583367,
            "range": "± 285062",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14681601,
            "range": "± 66792",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2604684,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2711676,
            "range": "± 2488",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "760efed339e3d5a98d403a99602615f4f292d3ac",
          "message": "Clean up the TCP stuff a bit more (#39)\n\nThere's still some ergonomic issues to be worked out but I'd like to wait on\r\nthe API changes going in before trying to resolve that stuff (for example, you\r\ncan't build this into a compiled subgraph easily).",
          "timestamp": "2022-01-11T21:09:00Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/760efed339e3d5a98d403a99602615f4f292d3ac"
        },
        "date": 1641959323685,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 440933,
            "range": "± 6195",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 213229193,
            "range": "± 1485169",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 198305699,
            "range": "± 6776171",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8772130,
            "range": "± 134329",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 51471804,
            "range": "± 490076",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55804811,
            "range": "± 629955",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17133824,
            "range": "± 201717",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3121385,
            "range": "± 33979",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3294386,
            "range": "± 36194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "760efed339e3d5a98d403a99602615f4f292d3ac",
          "message": "Clean up the TCP stuff a bit more (#39)\n\nThere's still some ergonomic issues to be worked out but I'd like to wait on\r\nthe API changes going in before trying to resolve that stuff (for example, you\r\ncan't build this into a compiled subgraph easily).",
          "timestamp": "2022-01-11T21:09:00Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/760efed339e3d5a98d403a99602615f4f292d3ac"
        },
        "date": 1642045706013,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 424699,
            "range": "± 15533",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 204553775,
            "range": "± 3514296",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 191748012,
            "range": "± 6558533",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9239519,
            "range": "± 289663",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47832467,
            "range": "± 1583136",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56006654,
            "range": "± 1545422",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15989668,
            "range": "± 491448",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2893126,
            "range": "± 107129",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2943037,
            "range": "± 88838",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b57b70999014c16e99eae7d9189e9d013c0ea462",
          "message": "Switch from a bespoke format -> bincode (#40)\n\nThis commit tidies up the TCP stuff more. There's still more to be done in\r\nterms of ergonomics but I want to wait for the API change to work on that. I\r\nthink the next steps are that, and also writing a benchmark against a\r\nhand-coded server, since I think there's a lot of low-hanging fruit in terms of\r\nstuff like buffer reuse.",
          "timestamp": "2022-01-13T19:02:12Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b57b70999014c16e99eae7d9189e9d013c0ea462"
        },
        "date": 1642132084389,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374873,
            "range": "± 2409",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 186256870,
            "range": "± 321683",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 173964726,
            "range": "± 1505282",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8408748,
            "range": "± 29041",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43352044,
            "range": "± 174087",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47817161,
            "range": "± 223095",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685200,
            "range": "± 7180",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2584157,
            "range": "± 1941",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2679121,
            "range": "± 3468",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f4ca34989ebf50a61939c3ad3d64f24daa219b29",
          "message": "fixup! CI only publish local packages, no deps",
          "timestamp": "2022-01-15T00:16:59Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f4ca34989ebf50a61939c3ad3d64f24daa219b29"
        },
        "date": 1642218592897,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 379866,
            "range": "± 13588",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 201910583,
            "range": "± 6099746",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 398924150,
            "range": "± 10117440",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11557880,
            "range": "± 410736",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 51982689,
            "range": "± 1936043",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48287347,
            "range": "± 2382367",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17894014,
            "range": "± 1015597",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3188254,
            "range": "± 199829",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3294881,
            "range": "± 123896",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f4ca34989ebf50a61939c3ad3d64f24daa219b29",
          "message": "fixup! CI only publish local packages, no deps",
          "timestamp": "2022-01-15T00:16:59Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f4ca34989ebf50a61939c3ad3d64f24daa219b29"
        },
        "date": 1642304888168,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375655,
            "range": "± 3700",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 197029948,
            "range": "± 491880",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 179625387,
            "range": "± 1332450",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9114767,
            "range": "± 31775",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43855646,
            "range": "± 64615",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47511414,
            "range": "± 263870",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14672039,
            "range": "± 17097",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2620199,
            "range": "± 2359",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2715788,
            "range": "± 3005",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f4ca34989ebf50a61939c3ad3d64f24daa219b29",
          "message": "fixup! CI only publish local packages, no deps",
          "timestamp": "2022-01-15T00:16:59Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f4ca34989ebf50a61939c3ad3d64f24daa219b29"
        },
        "date": 1642391312993,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 372768,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198652344,
            "range": "± 567086",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 189358771,
            "range": "± 1517010",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9685936,
            "range": "± 37778",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44149738,
            "range": "± 255885",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50277694,
            "range": "± 974906",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14690932,
            "range": "± 4928",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2677645,
            "range": "± 1981",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3559122,
            "range": "± 2274",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f4ca34989ebf50a61939c3ad3d64f24daa219b29",
          "message": "fixup! CI only publish local packages, no deps",
          "timestamp": "2022-01-15T00:16:59Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f4ca34989ebf50a61939c3ad3d64f24daa219b29"
        },
        "date": 1642477729770,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 333170,
            "range": "± 11745",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 186836243,
            "range": "± 6680992",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 206303309,
            "range": "± 12071848",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9282164,
            "range": "± 269387",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44832045,
            "range": "± 1991171",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 51312723,
            "range": "± 1850471",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15830500,
            "range": "± 669777",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2780279,
            "range": "± 154437",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2910387,
            "range": "± 114167",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec58f4e0b1f92b42e8a79fd268e90688ae0b1b3",
          "message": "Rewrite echo server using the surface API (#43)\n\n* Rewrite echo server using the surface API\r\n\r\nSort of minimal use of it so far since the logic here is pretty simple, but\r\nshould provide a foundation for things like address interning.\r\n\r\nWasn't sure if the wrap_{input,output} stuff aligns with your vision? LMK if\r\nthere's a cleaner/existing way to do that?\r\n\r\n* More refactoring of echo server",
          "timestamp": "2022-01-18T17:28:12Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/4ec58f4e0b1f92b42e8a79fd268e90688ae0b1b3"
        },
        "date": 1642564050799,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 348133,
            "range": "± 17757",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 186580596,
            "range": "± 5388144",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 210812460,
            "range": "± 10969501",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10502737,
            "range": "± 455509",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 49231837,
            "range": "± 1315331",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 54257550,
            "range": "± 1613204",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16495499,
            "range": "± 605630",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2914729,
            "range": "± 179439",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3062278,
            "range": "± 117268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "480f203898652ed33018da8a6f6e42414b60a5e8",
          "message": "Add partition operator to surface API (#48)",
          "timestamp": "2022-01-20T00:27:36Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/480f203898652ed33018da8a6f6e42414b60a5e8"
        },
        "date": 1642650396238,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 371001,
            "range": "± 2465",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 188417837,
            "range": "± 585279",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 178338378,
            "range": "± 2821599",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8426148,
            "range": "± 27376",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44384860,
            "range": "± 397813",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48261244,
            "range": "± 283313",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14683383,
            "range": "± 9813",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2630651,
            "range": "± 4688",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2693720,
            "range": "± 3160",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89fc4cce133f4539e44dde12b919a0019ba6e925",
          "message": "chat example (#46)\n\n* working toward chat\r\n\r\n* simple chat working\r\n\r\n* rebase working toward chat\r\n\r\n* msgs sent to server\r\n\r\n* simple chat working\r\n\r\n* finish merge\r\n\r\n* wip chat\r\n\r\n* chat v0.0\r\n\r\n* unused imports\r\n\r\n* clean up chat\r\n\r\n* make clippy happy",
          "timestamp": "2022-01-21T03:04:08Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/89fc4cce133f4539e44dde12b919a0019ba6e925"
        },
        "date": 1642736808069,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375812,
            "range": "± 3027",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200252153,
            "range": "± 760226",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 189637074,
            "range": "± 2964526",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9562651,
            "range": "± 24505",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43229711,
            "range": "± 143337",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48301016,
            "range": "± 495447",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14692466,
            "range": "± 5751",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2599556,
            "range": "± 3340",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2721125,
            "range": "± 2429",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89fc4cce133f4539e44dde12b919a0019ba6e925",
          "message": "chat example (#46)\n\n* working toward chat\r\n\r\n* simple chat working\r\n\r\n* rebase working toward chat\r\n\r\n* msgs sent to server\r\n\r\n* simple chat working\r\n\r\n* finish merge\r\n\r\n* wip chat\r\n\r\n* chat v0.0\r\n\r\n* unused imports\r\n\r\n* clean up chat\r\n\r\n* make clippy happy",
          "timestamp": "2022-01-21T03:04:08Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/89fc4cce133f4539e44dde12b919a0019ba6e925"
        },
        "date": 1642823225075,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 330335,
            "range": "± 17882",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 207614312,
            "range": "± 10100851",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 205461676,
            "range": "± 7694321",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9272032,
            "range": "± 432238",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47592396,
            "range": "± 3085616",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 52655145,
            "range": "± 2672644",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15043098,
            "range": "± 917885",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2806155,
            "range": "± 115589",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2986965,
            "range": "± 134030",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89fc4cce133f4539e44dde12b919a0019ba6e925",
          "message": "chat example (#46)\n\n* working toward chat\r\n\r\n* simple chat working\r\n\r\n* rebase working toward chat\r\n\r\n* msgs sent to server\r\n\r\n* simple chat working\r\n\r\n* finish merge\r\n\r\n* wip chat\r\n\r\n* chat v0.0\r\n\r\n* unused imports\r\n\r\n* clean up chat\r\n\r\n* make clippy happy",
          "timestamp": "2022-01-21T03:04:08Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/89fc4cce133f4539e44dde12b919a0019ba6e925"
        },
        "date": 1642909630721,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 432328,
            "range": "± 8013",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 208470804,
            "range": "± 1148294",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 197752254,
            "range": "± 5608160",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9951998,
            "range": "± 71745",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 49186306,
            "range": "± 664578",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55733281,
            "range": "± 900498",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16592954,
            "range": "± 236552",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2936259,
            "range": "± 22576",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3079790,
            "range": "± 19700",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89fc4cce133f4539e44dde12b919a0019ba6e925",
          "message": "chat example (#46)\n\n* working toward chat\r\n\r\n* simple chat working\r\n\r\n* rebase working toward chat\r\n\r\n* msgs sent to server\r\n\r\n* simple chat working\r\n\r\n* finish merge\r\n\r\n* wip chat\r\n\r\n* chat v0.0\r\n\r\n* unused imports\r\n\r\n* clean up chat\r\n\r\n* make clippy happy",
          "timestamp": "2022-01-21T03:04:08Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/89fc4cce133f4539e44dde12b919a0019ba6e925"
        },
        "date": 1642996067134,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 437658,
            "range": "± 8866",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 212264335,
            "range": "± 4749302",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 198403804,
            "range": "± 2683044",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10989660,
            "range": "± 150188",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 50962377,
            "range": "± 1657256",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55356802,
            "range": "± 1310852",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17178007,
            "range": "± 304291",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2965886,
            "range": "± 48173",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3129603,
            "range": "± 40671",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643082428569,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 325837,
            "range": "± 20566",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 204741577,
            "range": "± 7373422",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 207667620,
            "range": "± 16247411",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9706291,
            "range": "± 575613",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44193988,
            "range": "± 2245900",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57258301,
            "range": "± 4277657",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14562443,
            "range": "± 738338",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2712275,
            "range": "± 140473",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2834889,
            "range": "± 142472",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643168926210,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 367737,
            "range": "± 22008",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 234948854,
            "range": "± 5377406",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 231187590,
            "range": "± 5370260",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10345023,
            "range": "± 477658",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 54158962,
            "range": "± 3015319",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 63976965,
            "range": "± 3625442",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17089395,
            "range": "± 709421",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3072861,
            "range": "± 160661",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3247713,
            "range": "± 152229",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643255198113,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375596,
            "range": "± 4063",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 190858796,
            "range": "± 331960",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 176599249,
            "range": "± 8145920",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8275370,
            "range": "± 39680",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 48449569,
            "range": "± 660963",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48800789,
            "range": "± 426393",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14691375,
            "range": "± 4460",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2624196,
            "range": "± 3367",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2684777,
            "range": "± 2766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643341595333,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375354,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 189035028,
            "range": "± 764831",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 176704093,
            "range": "± 1413836",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8946380,
            "range": "± 11218",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43658885,
            "range": "± 294771",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48202816,
            "range": "± 436853",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685399,
            "range": "± 8929",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2579063,
            "range": "± 2687",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2630552,
            "range": "± 2077",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643427990591,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 260999,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 166783436,
            "range": "± 857270",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 156087152,
            "range": "± 24171542",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8086969,
            "range": "± 33446",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42104118,
            "range": "± 235588",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57343757,
            "range": "± 40961",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18206958,
            "range": "± 37196",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2850558,
            "range": "± 9417",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2950872,
            "range": "± 3379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643514424543,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 451116,
            "range": "± 2480",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 213235908,
            "range": "± 1230740",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 205647787,
            "range": "± 2579003",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9089751,
            "range": "± 44860",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 51848027,
            "range": "± 282124",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 58782741,
            "range": "± 665818",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17612210,
            "range": "± 108384",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3083379,
            "range": "± 22513",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3163610,
            "range": "± 18232",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b09dec11aa4e7df535ad4d4fd4be958821b9a31d",
          "message": "First attempt at an exchange-like operator (#56)\n\nI'm not really sure how best to generalize this, which is something we will\r\nprobably have to figure out.",
          "timestamp": "2022-01-24T17:41:29Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b09dec11aa4e7df535ad4d4fd4be958821b9a31d"
        },
        "date": 1643600850959,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 450532,
            "range": "± 4268",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 207686738,
            "range": "± 2228640",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 204335230,
            "range": "± 8620142",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9229386,
            "range": "± 38549",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 52619956,
            "range": "± 218298",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 59260209,
            "range": "± 556578",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17632286,
            "range": "± 17952",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3082147,
            "range": "± 37308",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3219378,
            "range": "± 4564",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "6725322d6eb3405f93b2a4c5790b71c9d4e0a9b1",
          "message": "Ignore &mut Vec clippy warning",
          "timestamp": "2022-01-31T21:57:31Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/6725322d6eb3405f93b2a4c5790b71c9d4e0a9b1"
        },
        "date": 1643687195317,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261116,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 168672250,
            "range": "± 1249701",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 159208698,
            "range": "± 3133710",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8642540,
            "range": "± 30575",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42256037,
            "range": "± 165556",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57445976,
            "range": "± 123679",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18218004,
            "range": "± 32572",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2932560,
            "range": "± 5692",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3015745,
            "range": "± 4419",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "6725322d6eb3405f93b2a4c5790b71c9d4e0a9b1",
          "message": "Ignore &mut Vec clippy warning",
          "timestamp": "2022-01-31T21:57:31Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/6725322d6eb3405f93b2a4c5790b71c9d4e0a9b1"
        },
        "date": 1643773592382,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 294742,
            "range": "± 11540",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 165000667,
            "range": "± 662504",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 155011070,
            "range": "± 5495053",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8074334,
            "range": "± 52623",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41988819,
            "range": "± 402800",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57632417,
            "range": "± 105905",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18215827,
            "range": "± 37287",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2869760,
            "range": "± 4011",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2924860,
            "range": "± 2745",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8c7bf017ad019f104d47fc46181231db3136a3e6",
          "message": "Add a `broadcast` operator (#61)\n\nNot much to this one, basically just a simplification of exchange.",
          "timestamp": "2022-02-02T21:26:12Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/8c7bf017ad019f104d47fc46181231db3136a3e6"
        },
        "date": 1643860022151,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375684,
            "range": "± 2452",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195964510,
            "range": "± 752311",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 187928165,
            "range": "± 5810459",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7593906,
            "range": "± 25891",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43160100,
            "range": "± 357374",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47956726,
            "range": "± 462207",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14679381,
            "range": "± 12815",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2584291,
            "range": "± 2768",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2618905,
            "range": "± 2301",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7bd4f89371546b380a41f44e8641a5512194d93a",
          "message": "Remove unused imports",
          "timestamp": "2022-02-04T00:25:09Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7bd4f89371546b380a41f44e8641a5512194d93a"
        },
        "date": 1643946404303,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 447826,
            "range": "± 7577",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 214841933,
            "range": "± 932827",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 127226894,
            "range": "± 511708",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10226852,
            "range": "± 207423",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42664938,
            "range": "± 130346",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 71409522,
            "range": "± 858548",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17637557,
            "range": "± 5320",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3208865,
            "range": "± 629918",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3200678,
            "range": "± 7422",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "7bd4f89371546b380a41f44e8641a5512194d93a",
          "message": "Remove unused imports",
          "timestamp": "2022-02-04T00:25:09Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/7bd4f89371546b380a41f44e8641a5512194d93a"
        },
        "date": 1643995768585,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 338163,
            "range": "± 12066",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 186618739,
            "range": "± 5803584",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 104974088,
            "range": "± 3388302",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9024478,
            "range": "± 336149",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36284403,
            "range": "± 1517558",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56893266,
            "range": "± 1821397",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16082565,
            "range": "± 778685",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2901926,
            "range": "± 168285",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2915351,
            "range": "± 111795",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1135b664fba1e5480ff6a493fd62f720c26b9ead",
          "message": "Update add_channel_input to take SendPort as arg instead of returning RecvPort",
          "timestamp": "2022-02-04T21:01:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1135b664fba1e5480ff6a493fd62f720c26b9ead"
        },
        "date": 1644032834410,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 379137,
            "range": "± 23707",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206582844,
            "range": "± 5141470",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 121089765,
            "range": "± 3270767",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10899775,
            "range": "± 478136",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41246452,
            "range": "± 1021047",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 76442493,
            "range": "± 2238323",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18314729,
            "range": "± 683556",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3302606,
            "range": "± 122395",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3327855,
            "range": "± 91681",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1135b664fba1e5480ff6a493fd62f720c26b9ead",
          "message": "Update add_channel_input to take SendPort as arg instead of returning RecvPort",
          "timestamp": "2022-02-04T21:01:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1135b664fba1e5480ff6a493fd62f720c26b9ead"
        },
        "date": 1644119207541,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 423185,
            "range": "± 9632",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 205927021,
            "range": "± 2988068",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 110896999,
            "range": "± 2258191",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8460907,
            "range": "± 465115",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41127843,
            "range": "± 1204923",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 66082128,
            "range": "± 2963226",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15926333,
            "range": "± 475396",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2849168,
            "range": "± 85603",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2933907,
            "range": "± 99481",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1135b664fba1e5480ff6a493fd62f720c26b9ead",
          "message": "Update add_channel_input to take SendPort as arg instead of returning RecvPort",
          "timestamp": "2022-02-04T21:01:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1135b664fba1e5480ff6a493fd62f720c26b9ead"
        },
        "date": 1644205667182,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 369659,
            "range": "± 21238",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 228592753,
            "range": "± 7792085",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 125635780,
            "range": "± 3812323",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9794951,
            "range": "± 645419",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40904272,
            "range": "± 2314440",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 72335325,
            "range": "± 4690687",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16536760,
            "range": "± 987604",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3149051,
            "range": "± 174601",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3179820,
            "range": "± 168088",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "a8dd6f485e5626688e285d28aeaa11b41e84759d",
          "message": "Add add_input_from_stream() to builder, fix #52",
          "timestamp": "2022-02-07T20:53:02Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/a8dd6f485e5626688e285d28aeaa11b41e84759d"
        },
        "date": 1644292029946,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375918,
            "range": "± 2657",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 202580534,
            "range": "± 498302",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 120082241,
            "range": "± 880473",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7951688,
            "range": "± 32368",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 37655636,
            "range": "± 119262",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 74349186,
            "range": "± 1385749",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14698450,
            "range": "± 8641",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2730489,
            "range": "± 23750",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2752886,
            "range": "± 41120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "a61638aec9569a55f149feba3aeea55021ce35dc",
          "message": "Add context to surface build\n\nThis will be needed once more features are added to context.\nWe also have the option to remove the wonky handoff list structure via\nthis.",
          "timestamp": "2022-02-09T00:26:31Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/a61638aec9569a55f149feba3aeea55021ce35dc"
        },
        "date": 1644378470334,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 378696,
            "range": "± 49964",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 201907115,
            "range": "± 3684623",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 113771954,
            "range": "± 2776845",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10412288,
            "range": "± 438249",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39435040,
            "range": "± 1056956",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 72191844,
            "range": "± 2267171",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17883674,
            "range": "± 588797",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3147434,
            "range": "± 135908",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3287695,
            "range": "± 140894",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "92b4cfb043c6789497f74d429d7f3fa045d87355",
          "message": "Temporarily pin toolchain to nightly-2022-02-09",
          "timestamp": "2022-02-10T23:58:24Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/92b4cfb043c6789497f74d429d7f3fa045d87355"
        },
        "date": 1644637666373,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 354605,
            "range": "± 62007",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 219315918,
            "range": "± 13031114",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 123131419,
            "range": "± 14228200",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10702579,
            "range": "± 1396649",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46352444,
            "range": "± 6108831",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 73439437,
            "range": "± 8528204",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16883680,
            "range": "± 2289487",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2997898,
            "range": "± 484044",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3373845,
            "range": "± 252902",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "92b4cfb043c6789497f74d429d7f3fa045d87355",
          "message": "Temporarily pin toolchain to nightly-2022-02-09",
          "timestamp": "2022-02-10T23:58:24Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/92b4cfb043c6789497f74d429d7f3fa045d87355"
        },
        "date": 1644724097624,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 385929,
            "range": "± 24664",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 202328896,
            "range": "± 4884044",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 108650735,
            "range": "± 4030943",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11389079,
            "range": "± 414164",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 46988025,
            "range": "± 1838565",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 73134443,
            "range": "± 2758987",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17703107,
            "range": "± 598712",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3219251,
            "range": "± 123510",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3246591,
            "range": "± 182785",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "92b4cfb043c6789497f74d429d7f3fa045d87355",
          "message": "Temporarily pin toolchain to nightly-2022-02-09",
          "timestamp": "2022-02-10T23:58:24Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/92b4cfb043c6789497f74d429d7f3fa045d87355"
        },
        "date": 1644810419286,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375914,
            "range": "± 2528",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199841608,
            "range": "± 1641066",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 118659005,
            "range": "± 1025099",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9317505,
            "range": "± 195093",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43065481,
            "range": "± 121284",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61667739,
            "range": "± 1532728",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14693518,
            "range": "± 11070",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2650380,
            "range": "± 4182",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2694432,
            "range": "± 4445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9941288a1c5ba86d322a13f6527e16de2a096de4",
          "message": "Initial pass of KVS (#77)\n\nThis is a very basic version of an Anna-like KVS. It doesn't actually use the\r\nHydroflow dataflow mechanisms yet because I am still trying to understand how\r\nthe system works fundamentally. I think the translation into dataflow should be\r\npretty straightforward.",
          "timestamp": "2022-02-14T20:31:31Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9941288a1c5ba86d322a13f6527e16de2a096de4"
        },
        "date": 1644896879660,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 354861,
            "range": "± 16978",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198059446,
            "range": "± 7579848",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 105933768,
            "range": "± 3954585",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10069672,
            "range": "± 546475",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43872091,
            "range": "± 1552193",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 72289892,
            "range": "± 4661225",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17778502,
            "range": "± 709609",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2998125,
            "range": "± 100900",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3000684,
            "range": "± 158948",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "efa9a86a519485a92e07c45be932beea752340d8",
          "message": "Remove obsolete \"variadic_generics\" feature",
          "timestamp": "2022-02-15T22:07:26Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/efa9a86a519485a92e07c45be932beea752340d8"
        },
        "date": 1644983300307,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 458621,
            "range": "± 8896",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 216599051,
            "range": "± 1033710",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 129535550,
            "range": "± 2686350",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11096190,
            "range": "± 222518",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 50747000,
            "range": "± 250435",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 78588598,
            "range": "± 1175959",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17916416,
            "range": "± 627098",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3249506,
            "range": "± 87377",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3173693,
            "range": "± 17601",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Chu",
            "username": "davidchuyaya",
            "email": "davidchuyaya@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2b9fac8368495cf7b4e3c9a1c5e5ef7a6097dc0e",
          "message": "Create README.md",
          "timestamp": "2022-02-16T22:33:12Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/2b9fac8368495cf7b4e3c9a1c5e5ef7a6097dc0e"
        },
        "date": 1645069638308,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376158,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206945721,
            "range": "± 907919",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 124175124,
            "range": "± 912280",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9138499,
            "range": "± 437896",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44696450,
            "range": "± 293514",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 75163876,
            "range": "± 943667",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14709830,
            "range": "± 11346",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2750744,
            "range": "± 37589",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2834208,
            "range": "± 53612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c409c3f5bde07685d87899a1d03244426c09c322",
          "message": "Use `Name: Into<Cow<'static, str>>` generic to avoid `.into()`s",
          "timestamp": "2022-02-16T23:59:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c409c3f5bde07685d87899a1d03244426c09c322"
        },
        "date": 1645156000457,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261478,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 176731966,
            "range": "± 777911",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 105287243,
            "range": "± 709966",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8238134,
            "range": "± 118872",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44536255,
            "range": "± 213463",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 78922471,
            "range": "± 388732",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18224848,
            "range": "± 12839",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2855519,
            "range": "± 6115",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2926402,
            "range": "± 2766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c409c3f5bde07685d87899a1d03244426c09c322",
          "message": "Use `Name: Into<Cow<'static, str>>` generic to avoid `.into()`s",
          "timestamp": "2022-02-16T23:59:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c409c3f5bde07685d87899a1d03244426c09c322"
        },
        "date": 1645242455226,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 381077,
            "range": "± 20517",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 204093078,
            "range": "± 7983609",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 109638587,
            "range": "± 4103584",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10715086,
            "range": "± 550592",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 47704931,
            "range": "± 1557095",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 77191949,
            "range": "± 3066152",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18057740,
            "range": "± 719146",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3212945,
            "range": "± 189511",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3273897,
            "range": "± 161446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c409c3f5bde07685d87899a1d03244426c09c322",
          "message": "Use `Name: Into<Cow<'static, str>>` generic to avoid `.into()`s",
          "timestamp": "2022-02-16T23:59:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c409c3f5bde07685d87899a1d03244426c09c322"
        },
        "date": 1645328818857,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 333858,
            "range": "± 21344",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 211570244,
            "range": "± 8819544",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 119633089,
            "range": "± 6397952",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10185981,
            "range": "± 579194",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41278485,
            "range": "± 2281161",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 65061615,
            "range": "± 4322367",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15019646,
            "range": "± 730276",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2846873,
            "range": "± 132664",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2879165,
            "range": "± 179857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c409c3f5bde07685d87899a1d03244426c09c322",
          "message": "Use `Name: Into<Cow<'static, str>>` generic to avoid `.into()`s",
          "timestamp": "2022-02-16T23:59:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c409c3f5bde07685d87899a1d03244426c09c322"
        },
        "date": 1645415244840,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 356870,
            "range": "± 26156",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 200809864,
            "range": "± 7831254",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 109467109,
            "range": "± 3965114",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9578977,
            "range": "± 496827",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43352260,
            "range": "± 1806951",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 58707286,
            "range": "± 2273029",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16192301,
            "range": "± 467340",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2930508,
            "range": "± 123859",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2940124,
            "range": "± 61261",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c409c3f5bde07685d87899a1d03244426c09c322",
          "message": "Use `Name: Into<Cow<'static, str>>` generic to avoid `.into()`s",
          "timestamp": "2022-02-16T23:59:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c409c3f5bde07685d87899a1d03244426c09c322"
        },
        "date": 1645501556635,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 331387,
            "range": "± 2670",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 175753758,
            "range": "± 598961",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 106292275,
            "range": "± 4750690",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8433670,
            "range": "± 30249",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 38145894,
            "range": "± 101980",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 55826728,
            "range": "± 181770",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12958805,
            "range": "± 8880",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2345658,
            "range": "± 2186",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2372301,
            "range": "± 2418",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c409c3f5bde07685d87899a1d03244426c09c322",
          "message": "Use `Name: Into<Cow<'static, str>>` generic to avoid `.into()`s",
          "timestamp": "2022-02-16T23:59:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c409c3f5bde07685d87899a1d03244426c09c322"
        },
        "date": 1645587966443,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375805,
            "range": "± 2834",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 186303891,
            "range": "± 1104804",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 108227413,
            "range": "± 1715938",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8443681,
            "range": "± 36668",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 38140543,
            "range": "± 410176",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56626084,
            "range": "± 881601",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12972895,
            "range": "± 27147",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2357663,
            "range": "± 6538",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2380828,
            "range": "± 15715",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Conor Power",
            "username": "conor-23",
            "email": "94084298+conor-23@users.noreply.github.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c1884eebb1ed63e6202e2d1a422905c6e1529e44",
          "message": "add three_clique hydroflow example (#84)\n\n* add three_clique hydroflow example\r\n* fix formatting of three_clique example",
          "timestamp": "2022-02-23T19:22:00Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c1884eebb1ed63e6202e2d1a422905c6e1529e44"
        },
        "date": 1645674398842,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 329070,
            "range": "± 16551",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 211325277,
            "range": "± 12632434",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 111420725,
            "range": "± 4515747",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8834384,
            "range": "± 399771",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 38294697,
            "range": "± 1688611",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57309261,
            "range": "± 4093640",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 13752153,
            "range": "± 526158",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2616939,
            "range": "± 151064",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2651313,
            "range": "± 114268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "54bafa4c2ce8c861ca9b176ac53d329acc3185c6",
          "message": "Add Two-Phase Commit example (#86)\n\n* two phase commit example\r\n\r\n* respond to PR comments\r\n\r\n* remove dead use line\r\n\r\n* fix comment formatting for linter\r\n\r\n* remove redundant message construction",
          "timestamp": "2022-02-24T08:07:06Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/54bafa4c2ce8c861ca9b176ac53d329acc3185c6"
        },
        "date": 1645760785081,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374964,
            "range": "± 2820",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198396331,
            "range": "± 521534",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 119584629,
            "range": "± 1182094",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8229389,
            "range": "± 243714",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41707981,
            "range": "± 51946",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 60087720,
            "range": "± 751849",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14687719,
            "range": "± 7195",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2716388,
            "range": "± 3400",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2661821,
            "range": "± 3800",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "54bafa4c2ce8c861ca9b176ac53d329acc3185c6",
          "message": "Add Two-Phase Commit example (#86)\n\n* two phase commit example\r\n\r\n* respond to PR comments\r\n\r\n* remove dead use line\r\n\r\n* fix comment formatting for linter\r\n\r\n* remove redundant message construction",
          "timestamp": "2022-02-24T08:07:06Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/54bafa4c2ce8c861ca9b176ac53d329acc3185c6"
        },
        "date": 1645847231559,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 446612,
            "range": "± 6399",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 213415556,
            "range": "± 794956",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 124693412,
            "range": "± 1299852",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11448931,
            "range": "± 322347",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 48974480,
            "range": "± 102959",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 71832423,
            "range": "± 695751",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17637872,
            "range": "± 29820",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3184254,
            "range": "± 10395",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3193478,
            "range": "± 7978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "54bafa4c2ce8c861ca9b176ac53d329acc3185c6",
          "message": "Add Two-Phase Commit example (#86)\n\n* two phase commit example\r\n\r\n* respond to PR comments\r\n\r\n* remove dead use line\r\n\r\n* fix comment formatting for linter\r\n\r\n* remove redundant message construction",
          "timestamp": "2022-02-24T08:07:06Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/54bafa4c2ce8c861ca9b176ac53d329acc3185c6"
        },
        "date": 1645933592097,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 286451,
            "range": "± 13257",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 171757290,
            "range": "± 3561921",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 95929807,
            "range": "± 831010",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8464508,
            "range": "± 86593",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44626292,
            "range": "± 47042",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 78621292,
            "range": "± 659487",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18227451,
            "range": "± 13022",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2925324,
            "range": "± 6470",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2945552,
            "range": "± 6013",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "54bafa4c2ce8c861ca9b176ac53d329acc3185c6",
          "message": "Add Two-Phase Commit example (#86)\n\n* two phase commit example\r\n\r\n* respond to PR comments\r\n\r\n* remove dead use line\r\n\r\n* fix comment formatting for linter\r\n\r\n* remove redundant message construction",
          "timestamp": "2022-02-24T08:07:06Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/54bafa4c2ce8c861ca9b176ac53d329acc3185c6"
        },
        "date": 1646019994013,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375742,
            "range": "± 2684",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 188816832,
            "range": "± 736064",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 111047538,
            "range": "± 984224",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 7652961,
            "range": "± 43509",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42697437,
            "range": "± 348820",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 59919372,
            "range": "± 448785",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14688201,
            "range": "± 43172",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2684538,
            "range": "± 24465",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2630942,
            "range": "± 8575",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f8efbc50837723bb0b4b721a897bcf2c6e1065c8",
          "message": "Fix hf.run_async() busy spinning.\n\nThis replaces the std mpsc event channels with tokio unbounded channels\nso we can .await them.\n\nFixes #87",
          "timestamp": "2022-02-28T21:15:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f8efbc50837723bb0b4b721a897bcf2c6e1065c8"
        },
        "date": 1646106489203,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 371801,
            "range": "± 21620",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198121650,
            "range": "± 8253665",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 113533322,
            "range": "± 5321767",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10900233,
            "range": "± 676280",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 38545375,
            "range": "± 2511957",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57279680,
            "range": "± 3662607",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17300729,
            "range": "± 840868",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3256632,
            "range": "± 233309",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3213511,
            "range": "± 120736",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f8efbc50837723bb0b4b721a897bcf2c6e1065c8",
          "message": "Fix hf.run_async() busy spinning.\n\nThis replaces the std mpsc event channels with tokio unbounded channels\nso we can .await them.\n\nFixes #87",
          "timestamp": "2022-02-28T21:15:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f8efbc50837723bb0b4b721a897bcf2c6e1065c8"
        },
        "date": 1646192765211,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261535,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 170415754,
            "range": "± 1773523",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 101881202,
            "range": "± 547003",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10838169,
            "range": "± 116055",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34472630,
            "range": "± 118710",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 58602724,
            "range": "± 501974",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18224779,
            "range": "± 49389",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2931234,
            "range": "± 5922",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2976135,
            "range": "± 7592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f8efbc50837723bb0b4b721a897bcf2c6e1065c8",
          "message": "Fix hf.run_async() busy spinning.\n\nThis replaces the std mpsc event channels with tokio unbounded channels\nso we can .await them.\n\nFixes #87",
          "timestamp": "2022-02-28T21:15:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f8efbc50837723bb0b4b721a897bcf2c6e1065c8"
        },
        "date": 1646279233718,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 437043,
            "range": "± 8053",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 212612163,
            "range": "± 1732496",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 126262894,
            "range": "± 5011646",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12894175,
            "range": "± 717859",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41704333,
            "range": "± 439043",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56022300,
            "range": "± 997282",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17017291,
            "range": "± 335582",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3140561,
            "range": "± 53309",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3095240,
            "range": "± 45969",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a4d94a4bad2483eb11bbe86bc9e7c05f93a30bc8",
          "message": "Rewrite KVS in dataflow (#91)\n\n* add stream join operator\r\n\r\n* Add KVS in dataflow\r\n\r\nThis is a first pass at a dataflow based KVS. It is missing a bunch of clock\r\nstuff, but I was getting anxious about not merging this so here's an early\r\nversion of it.\r\n\r\nThe structure of the program is roughly as follows:\r\n\r\n```mermaid\r\ngraph BT\r\n    Y[Read Requests] --> Z[Streaming Join]\r\n    X[Received Batches] --> Z\r\n    Z --> Q[Respond to Read Request]\r\n\r\n    F[Write Requests] --> B\r\n    A[Epoch Timer] --> B[Batcher / Merger]\r\n    B --> C[Join]\r\n    G[Ownership] --> C\r\n    C --> E[Network Shuffle]\r\n```",
          "timestamp": "2022-03-03T20:06:44Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/a4d94a4bad2483eb11bbe86bc9e7c05f93a30bc8"
        },
        "date": 1646365678686,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 379450,
            "range": "± 14058",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 210470266,
            "range": "± 6160975",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 120967636,
            "range": "± 3546230",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13315614,
            "range": "± 517405",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39535762,
            "range": "± 1265805",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61835552,
            "range": "± 3062415",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18045364,
            "range": "± 426834",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3152387,
            "range": "± 88568",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3196559,
            "range": "± 127362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "d39d44d76355db3e0b9b5c1317dbdd9ba314857c",
          "message": "Rename scheduler `ready_queue` to `stratum_queues`",
          "timestamp": "2022-03-04T23:32:17Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d39d44d76355db3e0b9b5c1317dbdd9ba314857c"
        },
        "date": 1646451963256,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375616,
            "range": "± 3170",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199429704,
            "range": "± 411496",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 106319427,
            "range": "± 526125",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10025187,
            "range": "± 180849",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36297601,
            "range": "± 46305",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47959006,
            "range": "± 211671",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14678371,
            "range": "± 12411",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2655993,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2690682,
            "range": "± 1967",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "d39d44d76355db3e0b9b5c1317dbdd9ba314857c",
          "message": "Rename scheduler `ready_queue` to `stratum_queues`",
          "timestamp": "2022-03-04T23:32:17Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d39d44d76355db3e0b9b5c1317dbdd9ba314857c"
        },
        "date": 1646538446532,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 359772,
            "range": "± 35852",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 192434094,
            "range": "± 7588234",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 104520419,
            "range": "± 4531994",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13270178,
            "range": "± 720454",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36255589,
            "range": "± 1727670",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 54700123,
            "range": "± 3140828",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16403421,
            "range": "± 768691",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3008738,
            "range": "± 141914",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3174665,
            "range": "± 163335",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "d39d44d76355db3e0b9b5c1317dbdd9ba314857c",
          "message": "Rename scheduler `ready_queue` to `stratum_queues`",
          "timestamp": "2022-03-04T23:32:17Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d39d44d76355db3e0b9b5c1317dbdd9ba314857c"
        },
        "date": 1646624778047,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 317983,
            "range": "± 5646",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 166730893,
            "range": "± 744373",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 98867404,
            "range": "± 778109",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10302585,
            "range": "± 165247",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34000483,
            "range": "± 57442",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57664850,
            "range": "± 50502",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18211569,
            "range": "± 28287",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2910838,
            "range": "± 5547",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2933150,
            "range": "± 5431",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "5dec91286550c84ae11d569c82c09bbb6efcb23e",
          "message": "CI publish design_docs on docs site",
          "timestamp": "2022-03-07T19:30:30Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/5dec91286550c84ae11d569c82c09bbb6efcb23e"
        },
        "date": 1646711180104,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 262941,
            "range": "± 8577",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 171196585,
            "range": "± 1084067",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 102110779,
            "range": "± 2991927",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10751412,
            "range": "± 147916",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34387643,
            "range": "± 538072",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57990038,
            "range": "± 371902",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18228114,
            "range": "± 14457",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2923212,
            "range": "± 16920",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2928456,
            "range": "± 4345",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "71fa71a73cdeade8b18bfa4e5d051f5f0976c990",
          "message": "Make groupby tests more relational-looking (#100)\n\n* Make groupby tests more relational-looking\r\n* Make even more relational with itertools\r\n* Change groupby to use tuples instead of key fn",
          "timestamp": "2022-03-08T23:22:21Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/71fa71a73cdeade8b18bfa4e5d051f5f0976c990"
        },
        "date": 1646797594470,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 400503,
            "range": "± 13008",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 204731429,
            "range": "± 3500706",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 116526577,
            "range": "± 2078274",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11530188,
            "range": "± 314517",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 39279123,
            "range": "± 1028637",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 50929475,
            "range": "± 1482305",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15647178,
            "range": "± 418191",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2864639,
            "range": "± 86671",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2798608,
            "range": "± 79628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "54c70707ffb8e9c00d71f8ed7c389f94e04846c2",
          "message": "Move KVS to examples (#101)\n\nAlso fixes some lints",
          "timestamp": "2022-03-09T21:44:42Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/54c70707ffb8e9c00d71f8ed7c389f94e04846c2"
        },
        "date": 1646884028400,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 260930,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 158544551,
            "range": "± 1260168",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 97706078,
            "range": "± 598919",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11020257,
            "range": "± 254178",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34264839,
            "range": "± 193027",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56354375,
            "range": "± 124893",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18209865,
            "range": "± 23119",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2930900,
            "range": "± 9269",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2956538,
            "range": "± 2843",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "a65a3c13c0e0bd37748209ad7d40b5864b4edcd3",
          "message": "Clean up old code in chat client.rs",
          "timestamp": "2022-03-10T22:41:50Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/a65a3c13c0e0bd37748209ad7d40b5864b4edcd3"
        },
        "date": 1646970432049,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 367377,
            "range": "± 17838",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 202023244,
            "range": "± 4137630",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 113906172,
            "range": "± 2981049",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13083675,
            "range": "± 572924",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 38259429,
            "range": "± 1189118",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56274793,
            "range": "± 3517944",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17954191,
            "range": "± 1112190",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3262313,
            "range": "± 238993",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3253530,
            "range": "± 111249",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f44c50a5dd9d4fe44b0095b8d06b75818e77debb",
          "message": "Update where clause position\n\nhttps://github.com/rust-lang/rust/issues/89122",
          "timestamp": "2022-03-07T21:44:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f44c50a5dd9d4fe44b0095b8d06b75818e77debb"
        },
        "date": 1647056807416,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 336641,
            "range": "± 12414",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 191240370,
            "range": "± 6171804",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 111283124,
            "range": "± 2509414",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12255626,
            "range": "± 784380",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 35236346,
            "range": "± 1076948",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 52100257,
            "range": "± 1877374",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 16027665,
            "range": "± 452816",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2963238,
            "range": "± 131106",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2970019,
            "range": "± 176715",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f44c50a5dd9d4fe44b0095b8d06b75818e77debb",
          "message": "Update where clause position\n\nhttps://github.com/rust-lang/rust/issues/89122",
          "timestamp": "2022-03-07T21:44:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f44c50a5dd9d4fe44b0095b8d06b75818e77debb"
        },
        "date": 1647143185518,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375837,
            "range": "± 2752",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 201538942,
            "range": "± 935935",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 120923688,
            "range": "± 893060",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12361261,
            "range": "± 118644",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 37206350,
            "range": "± 157260",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 52571090,
            "range": "± 1446322",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14697720,
            "range": "± 10562",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2671435,
            "range": "± 5163",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2664627,
            "range": "± 4094",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f44c50a5dd9d4fe44b0095b8d06b75818e77debb",
          "message": "Update where clause position\n\nhttps://github.com/rust-lang/rust/issues/89122",
          "timestamp": "2022-03-07T21:44:51Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f44c50a5dd9d4fe44b0095b8d06b75818e77debb"
        },
        "date": 1647229672402,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 443889,
            "range": "± 6121",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 215171323,
            "range": "± 1331855",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 123380861,
            "range": "± 843328",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 14311749,
            "range": "± 380133",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 41791723,
            "range": "± 475177",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 56502796,
            "range": "± 800181",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17320745,
            "range": "± 213917",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3130064,
            "range": "± 47192",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3145050,
            "range": "± 38805",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "76168d37f49c9767625de33e1f87ea99f7f5d7a2",
          "message": "Add dev setup to README.md",
          "timestamp": "2022-03-11T21:56:54Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/76168d37f49c9767625de33e1f87ea99f7f5d7a2"
        },
        "date": 1647315964804,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 331565,
            "range": "± 2982",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 186668045,
            "range": "± 1090381",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 97958110,
            "range": "± 1092191",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10802782,
            "range": "± 140579",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 33379100,
            "range": "± 144248",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 44006553,
            "range": "± 735844",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12960506,
            "range": "± 67801",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2481989,
            "range": "± 17015",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2420074,
            "range": "± 2927",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "9857a394f4814388997353328080e9885f46f0d6",
          "message": "dataflow diagrams for 2pc readme",
          "timestamp": "2022-03-15T00:16:28Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/9857a394f4814388997353328080e9885f46f0d6"
        },
        "date": 1647402559222,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376459,
            "range": "± 16229",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 211479662,
            "range": "± 5305297",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 121978789,
            "range": "± 4104164",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13724528,
            "range": "± 754793",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40392939,
            "range": "± 1929029",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 63012171,
            "range": "± 3971991",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18273801,
            "range": "± 641879",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3380606,
            "range": "± 121058",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3392017,
            "range": "± 171762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "34251436edfe512bb017cfa9849e65a85b7bbbfd",
          "message": "Combine old 'hof with context under new 'ctx lifetime",
          "timestamp": "2022-03-16T21:27:02Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/34251436edfe512bb017cfa9849e65a85b7bbbfd"
        },
        "date": 1647488791567,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 264783,
            "range": "± 3527",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 171750692,
            "range": "± 2082575",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 101617215,
            "range": "± 1321709",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10486940,
            "range": "± 134909",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34444041,
            "range": "± 350885",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 58141202,
            "range": "± 534459",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18405497,
            "range": "± 154431",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2910914,
            "range": "± 34293",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2943305,
            "range": "± 49638",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eebd4075e83808d51b40b4850e60ddba52f5862c",
          "message": "kvs: pull benchmark into separate file (#116)\n\nAlso remove the reporting of latency information for now, since it was\r\nvulnerable to coordinated omission and is not reliable.",
          "timestamp": "2022-03-17T20:47:14Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/eebd4075e83808d51b40b4850e60ddba52f5862c"
        },
        "date": 1647575223435,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 263853,
            "range": "± 4297",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 162168119,
            "range": "± 607359",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 101192919,
            "range": "± 3365780",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10393411,
            "range": "± 136048",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34105649,
            "range": "± 115234",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61240947,
            "range": "± 240375",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18228705,
            "range": "± 11418",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2911718,
            "range": "± 6315",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2919391,
            "range": "± 3651",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "5618b3723674e3fc14f2378fe27319c06b66d32a",
          "message": "Add partition_with_context, change to use FnMut instead of Fn",
          "timestamp": "2022-03-17T22:23:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/5618b3723674e3fc14f2378fe27319c06b66d32a"
        },
        "date": 1647661678326,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 413443,
            "range": "± 24519",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 253788332,
            "range": "± 9449767",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 150400636,
            "range": "± 7539155",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 14495138,
            "range": "± 935228",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 44329178,
            "range": "± 2718475",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 72741690,
            "range": "± 5691752",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 19232391,
            "range": "± 941644",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3682836,
            "range": "± 247498",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3698188,
            "range": "± 294906",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "5618b3723674e3fc14f2378fe27319c06b66d32a",
          "message": "Add partition_with_context, change to use FnMut instead of Fn",
          "timestamp": "2022-03-17T22:23:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/5618b3723674e3fc14f2378fe27319c06b66d32a"
        },
        "date": 1647747969065,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375111,
            "range": "± 2698",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 198733020,
            "range": "± 525694",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 118427309,
            "range": "± 2036049",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11505485,
            "range": "± 35117",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36005710,
            "range": "± 63363",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47398057,
            "range": "± 473133",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14690855,
            "range": "± 4583",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2800691,
            "range": "± 5527",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3431501,
            "range": "± 2514",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "5618b3723674e3fc14f2378fe27319c06b66d32a",
          "message": "Add partition_with_context, change to use FnMut instead of Fn",
          "timestamp": "2022-03-17T22:23:57Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/5618b3723674e3fc14f2378fe27319c06b66d32a"
        },
        "date": 1647834575719,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 378524,
            "range": "± 16375",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 206637920,
            "range": "± 6136370",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 117076774,
            "range": "± 3883527",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13477534,
            "range": "± 460132",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40456304,
            "range": "± 1366491",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48908554,
            "range": "± 2939145",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17876775,
            "range": "± 545341",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3312626,
            "range": "± 129434",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3431697,
            "range": "± 167316",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "53ba0257c4413174d3edf8a3a3da9afc60d30bfc",
          "message": "fixup! Include gh-pages files thru build",
          "timestamp": "2022-03-21T23:25:06Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/53ba0257c4413174d3edf8a3a3da9afc60d30bfc"
        },
        "date": 1647920939995,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 286076,
            "range": "± 4614",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 195835690,
            "range": "± 7309594",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 104580481,
            "range": "± 2464816",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10046787,
            "range": "± 353110",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 31090395,
            "range": "± 570438",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 47406213,
            "range": "± 1644142",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 13388769,
            "range": "± 419977",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2671111,
            "range": "± 68438",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2672197,
            "range": "± 74228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dcdba24da73c1e0d000d846e32ef1e853a1b2b6c",
          "message": "Add fold_epoch to surface API (#121)",
          "timestamp": "2022-03-22T21:49:03Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/dcdba24da73c1e0d000d846e32ef1e853a1b2b6c"
        },
        "date": 1648007448379,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 264226,
            "range": "± 3931",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 172978961,
            "range": "± 4493487",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 97804417,
            "range": "± 1446673",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10538298,
            "range": "± 177252",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34718101,
            "range": "± 162334",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 58006450,
            "range": "± 835442",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18399067,
            "range": "± 321142",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2927681,
            "range": "± 35724",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2951178,
            "range": "± 32198",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "35fa5e9870006d46203771381ade4ba7615ec8f2",
          "message": "fixup! Use newtypes for Subgraph/Handoff/State IDs",
          "timestamp": "2022-03-23T21:09:25Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/35fa5e9870006d46203771381ade4ba7615ec8f2"
        },
        "date": 1648093687722,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374769,
            "range": "± 2641",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 239194147,
            "range": "± 1247653",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 117338205,
            "range": "± 1175195",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10521543,
            "range": "± 36564",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36744627,
            "range": "± 218189",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61577402,
            "range": "± 242417",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14682306,
            "range": "± 9583",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2651572,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2962908,
            "range": "± 19365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "88fd58855209c2e4258d061d65cabe90c59bb605",
          "message": "Write introduction and setup portion of book\n\nMoved from README.md",
          "timestamp": "2022-03-21T23:16:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/88fd58855209c2e4258d061d65cabe90c59bb605"
        },
        "date": 1648152810873,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 419435,
            "range": "± 29477",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 279282428,
            "range": "± 7597963",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 132620009,
            "range": "± 3966722",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13695498,
            "range": "± 654653",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40836933,
            "range": "± 1349432",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 81432481,
            "range": "± 3109845",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18470335,
            "range": "± 1073044",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3443914,
            "range": "± 119680",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3517443,
            "range": "± 110083",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1cf48c4d89c5724a46793ec1faea81d3e88c5ec0",
          "message": "Use `NodeId` for mermaid graph instead of `usize`",
          "timestamp": "2022-03-23T21:08:55Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1cf48c4d89c5724a46793ec1faea81d3e88c5ec0"
        },
        "date": 1648180059446,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 261334,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 222300475,
            "range": "± 1007610",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 100437237,
            "range": "± 1012936",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10769684,
            "range": "± 88236",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34486394,
            "range": "± 117535",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 81534168,
            "range": "± 2246209",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18224858,
            "range": "± 12048",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2864186,
            "range": "± 3022",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2924425,
            "range": "± 2999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1cf48c4d89c5724a46793ec1faea81d3e88c5ec0",
          "message": "Use `NodeId` for mermaid graph instead of `usize`",
          "timestamp": "2022-03-23T21:08:55Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1cf48c4d89c5724a46793ec1faea81d3e88c5ec0"
        },
        "date": 1648266453819,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 316543,
            "range": "± 6546",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 222062729,
            "range": "± 1427067",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 100960574,
            "range": "± 682889",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10837108,
            "range": "± 98676",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 33947633,
            "range": "± 94828",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 83046964,
            "range": "± 908279",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18225731,
            "range": "± 12053",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2887227,
            "range": "± 18978",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2919284,
            "range": "± 2818",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1cf48c4d89c5724a46793ec1faea81d3e88c5ec0",
          "message": "Use `NodeId` for mermaid graph instead of `usize`",
          "timestamp": "2022-03-23T21:08:55Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1cf48c4d89c5724a46793ec1faea81d3e88c5ec0"
        },
        "date": 1648352852298,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 318482,
            "range": "± 5599",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 224188087,
            "range": "± 3608927",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 101637772,
            "range": "± 1253483",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10870610,
            "range": "± 79128",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 33995637,
            "range": "± 207565",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 83371715,
            "range": "± 595282",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18224095,
            "range": "± 11556",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2866740,
            "range": "± 4628",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2897584,
            "range": "± 3863",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "1cf48c4d89c5724a46793ec1faea81d3e88c5ec0",
          "message": "Use `NodeId` for mermaid graph instead of `usize`",
          "timestamp": "2022-03-23T21:08:55Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/1cf48c4d89c5724a46793ec1faea81d3e88c5ec0"
        },
        "date": 1648439567903,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 432874,
            "range": "± 8559",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 239827214,
            "range": "± 3413281",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 121824318,
            "range": "± 3028465",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11682096,
            "range": "± 442569",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40257542,
            "range": "± 1282386",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 66567265,
            "range": "± 2692806",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 15809874,
            "range": "± 606825",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2929942,
            "range": "± 123364",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2941955,
            "range": "± 118459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joe Hellerstein",
            "username": "jhellerstein",
            "email": "jmh@berkeley.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "47536c487020b32366628dbc60c6d9b9178dd3c6",
          "message": "dot graphs and indents for mermaid (#127)\n\n* dot graphs\r\n\r\n* fix dot flags in READMEs\r\n\r\n* remove boilerplate comment\r\n\r\n* clean up graphing support\r\n\r\n* remove stray comment\r\n\r\n* address comments\r\n\r\n* address linter's alphabetization obsession",
          "timestamp": "2022-03-28T20:02:04Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/47536c487020b32366628dbc60c6d9b9178dd3c6"
        },
        "date": 1648525989249,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 364473,
            "range": "± 23538",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 238051775,
            "range": "± 7132277",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 121205088,
            "range": "± 4265374",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13857754,
            "range": "± 631715",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40160613,
            "range": "± 1920726",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 74492673,
            "range": "± 3537462",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17803472,
            "range": "± 913669",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3250932,
            "range": "± 161413",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3221404,
            "range": "± 197845",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "c33f81a10963ff2878b687fa9fd4e8bfc3a34fcd",
          "message": "fixup! Add another implementation of KVS (#122)",
          "timestamp": "2022-03-29T20:04:26Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/c33f81a10963ff2878b687fa9fd4e8bfc3a34fcd"
        },
        "date": 1648612329528,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 428826,
            "range": "± 12281",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 250485583,
            "range": "± 4047299",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 122800641,
            "range": "± 2212304",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12021914,
            "range": "± 390078",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40608859,
            "range": "± 1162540",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 76968237,
            "range": "± 2334913",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17206088,
            "range": "± 333190",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3007262,
            "range": "± 93234",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3057157,
            "range": "± 97361",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "bf37b4cd247c51e7cd1687db4fc8270b41a02228",
          "message": "Add book mermaid support, finish example 1",
          "timestamp": "2022-03-29T19:18:30Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/bf37b4cd247c51e7cd1687db4fc8270b41a02228"
        },
        "date": 1648698702400,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 469636,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 249779736,
            "range": "± 1693337",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 127550592,
            "range": "± 2422484",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 15869589,
            "range": "± 103969",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43411990,
            "range": "± 97742",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 76236075,
            "range": "± 243974",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18341265,
            "range": "± 17548",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3303109,
            "range": "± 9452",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3326847,
            "range": "± 1885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "0a9b96cd76f378233e9ff8cb1a8e97ec6b2dab5e",
          "message": "Move diagram code into flow_graph",
          "timestamp": "2022-03-30T22:32:34Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/0a9b96cd76f378233e9ff8cb1a8e97ec6b2dab5e"
        },
        "date": 1648785423020,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 381952,
            "range": "± 9170",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 246013742,
            "range": "± 4751619",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 119123342,
            "range": "± 2278429",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13516213,
            "range": "± 251734",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 40473095,
            "range": "± 1332431",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 66403044,
            "range": "± 1275103",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18209188,
            "range": "± 584558",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3375858,
            "range": "± 79235",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3384590,
            "range": "± 139112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "3aa8744f64df8f8b8d39fbc0f3b9528770712b1c",
          "message": "Add vechandoff to builder::prelude",
          "timestamp": "2022-04-01T22:04:52Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/3aa8744f64df8f8b8d39fbc0f3b9528770712b1c"
        },
        "date": 1648871426724,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 331767,
            "range": "± 2779",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 232184703,
            "range": "± 793680",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 116713457,
            "range": "± 931301",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11586707,
            "range": "± 38932",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 37489580,
            "range": "± 254247",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 66265434,
            "range": "± 769443",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14700259,
            "range": "± 6787",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2684856,
            "range": "± 11410",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2727553,
            "range": "± 19091",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "3aa8744f64df8f8b8d39fbc0f3b9528770712b1c",
          "message": "Add vechandoff to builder::prelude",
          "timestamp": "2022-04-01T22:04:52Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/3aa8744f64df8f8b8d39fbc0f3b9528770712b1c"
        },
        "date": 1648957867997,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 466535,
            "range": "± 32759",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 260756555,
            "range": "± 1326242",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 126893487,
            "range": "± 1501118",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 13932995,
            "range": "± 42296",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43071933,
            "range": "± 130956",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 83143099,
            "range": "± 765250",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17641219,
            "range": "± 26546",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3484744,
            "range": "± 188875",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3432851,
            "range": "± 182235",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "3aa8744f64df8f8b8d39fbc0f3b9528770712b1c",
          "message": "Add vechandoff to builder::prelude",
          "timestamp": "2022-04-01T22:04:52Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/3aa8744f64df8f8b8d39fbc0f3b9528770712b1c"
        },
        "date": 1649044392989,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 444786,
            "range": "± 5246",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 257214867,
            "range": "± 1529299",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 126410416,
            "range": "± 1837921",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 14473326,
            "range": "± 298539",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43351680,
            "range": "± 562779",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 80130682,
            "range": "± 1390605",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 17483184,
            "range": "± 173990",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3143716,
            "range": "± 62011",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3131684,
            "range": "± 68228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "d986d010aa0759ee9acf42368c21cd3480ec0618",
          "message": "Remove lifetime from Context, avoid need to construct instances",
          "timestamp": "2022-03-30T21:23:22Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d986d010aa0759ee9acf42368c21cd3480ec0618"
        },
        "date": 1649130625485,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375167,
            "range": "± 21499",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 209818590,
            "range": "± 2172032",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 112461706,
            "range": "± 1185912",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8927677,
            "range": "± 39314",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 32099511,
            "range": "± 191457",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61786327,
            "range": "± 4028972",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14693403,
            "range": "± 12878",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2355286,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2356979,
            "range": "± 2224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "f1b6e8dfec42d57c1a5396defb695c6a4a68e527",
          "message": "Include mdbook-mermaid in build",
          "timestamp": "2022-04-05T21:23:56Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/f1b6e8dfec42d57c1a5396defb695c6a4a68e527"
        },
        "date": 1649217102013,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 312502,
            "range": "± 15504",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 220629733,
            "range": "± 1453406",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 98466613,
            "range": "± 1301750",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10275549,
            "range": "± 104815",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34193326,
            "range": "± 196032",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 81963215,
            "range": "± 272217",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18219125,
            "range": "± 19119",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2861827,
            "range": "± 10899",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3027335,
            "range": "± 20029",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d020b01869532136cc7a0bf45629c86dc5c411c2",
          "message": "Re-add the \"raw\" implementation of the KVS (#137)\n\nThis one uses no Hydroflow at all. Similar to the original one, just factors\r\nsome stuff out.",
          "timestamp": "2022-04-06T22:28:15Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d020b01869532136cc7a0bf45629c86dc5c411c2"
        },
        "date": 1649303455413,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374929,
            "range": "± 2664",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 199874139,
            "range": "± 494033",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 114760491,
            "range": "± 1595219",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12657312,
            "range": "± 23969",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36410141,
            "range": "± 63615",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 65710618,
            "range": "± 624639",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14687428,
            "range": "± 13358",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2654093,
            "range": "± 6944",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2693638,
            "range": "± 3084",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Justin Jaffray",
            "username": "justinj",
            "email": "justin.jaffray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d020b01869532136cc7a0bf45629c86dc5c411c2",
          "message": "Re-add the \"raw\" implementation of the KVS (#137)\n\nThis one uses no Hydroflow at all. Similar to the original one, just factors\r\nsome stuff out.",
          "timestamp": "2022-04-06T22:28:15Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/d020b01869532136cc7a0bf45629c86dc5c411c2"
        },
        "date": 1649389955224,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 370702,
            "range": "± 2969",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 197148131,
            "range": "± 1044885",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 114707780,
            "range": "± 1030017",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10048813,
            "range": "± 50524",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36375476,
            "range": "± 156062",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 61009180,
            "range": "± 402525",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14685063,
            "range": "± 11227",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2672996,
            "range": "± 5048",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2678815,
            "range": "± 2946",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "ec81dca8daa9f3e790ca817f98325347ce6c8681",
          "message": "Finish book example_4",
          "timestamp": "2022-04-07T21:51:53Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/ec81dca8daa9f3e790ca817f98325347ce6c8681"
        },
        "date": 1649821949169,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375602,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 232583129,
            "range": "± 1170042",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 114604810,
            "range": "± 1090591",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10242217,
            "range": "± 157248",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36183075,
            "range": "± 53116",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48455813,
            "range": "± 339814",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14677128,
            "range": "± 9464",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2869930,
            "range": "± 18859",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2806816,
            "range": "± 2379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "bc78af1c02758d055e797241f10d36daee3d8388",
          "message": "Provide context to initial build of subgraph, surface API",
          "timestamp": "2022-04-08T23:30:02Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/bc78af1c02758d055e797241f10d36daee3d8388"
        },
        "date": 1649908372602,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 374938,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 231728001,
            "range": "± 1824834",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 117938848,
            "range": "± 1985951",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 9998035,
            "range": "± 27321",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36570814,
            "range": "± 96021",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 49315730,
            "range": "± 1077134",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14691483,
            "range": "± 4564",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2715215,
            "range": "± 4730",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2708138,
            "range": "± 2845",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "bc78af1c02758d055e797241f10d36daee3d8388",
          "message": "Provide context to initial build of subgraph, surface API",
          "timestamp": "2022-04-08T23:30:02Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/bc78af1c02758d055e797241f10d36daee3d8388"
        },
        "date": 1649995392887,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 289775,
            "range": "± 8383",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 217423224,
            "range": "± 868020",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 99901772,
            "range": "± 1156144",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10422902,
            "range": "± 157572",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34689345,
            "range": "± 111589",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57713471,
            "range": "± 98820",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18215231,
            "range": "± 17920",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3147206,
            "range": "± 5860",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2889599,
            "range": "± 3292",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "b7ea31f28ee36e1324960ea48d5c1aa6abc19f93",
          "message": "Rename `into_parts()` to `make_parts()`",
          "timestamp": "2022-04-15T20:56:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b7ea31f28ee36e1324960ea48d5c1aa6abc19f93"
        },
        "date": 1650081133915,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 402533,
            "range": "± 27123",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 265834049,
            "range": "± 6999468",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 129332689,
            "range": "± 4872759",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 14271679,
            "range": "± 649409",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 42919545,
            "range": "± 2331072",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 54243795,
            "range": "± 3245708",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 19557166,
            "range": "± 842478",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3607655,
            "range": "± 200778",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3533014,
            "range": "± 177384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "b7ea31f28ee36e1324960ea48d5c1aa6abc19f93",
          "message": "Rename `into_parts()` to `make_parts()`",
          "timestamp": "2022-04-15T20:56:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b7ea31f28ee36e1324960ea48d5c1aa6abc19f93"
        },
        "date": 1650167502026,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 370959,
            "range": "± 5019",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 233878792,
            "range": "± 582778",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 106412598,
            "range": "± 3881821",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10749888,
            "range": "± 56393",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 35980156,
            "range": "± 41984",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 48365757,
            "range": "± 406871",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14681922,
            "range": "± 10355",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2714939,
            "range": "± 10518",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2672290,
            "range": "± 4092",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "b7ea31f28ee36e1324960ea48d5c1aa6abc19f93",
          "message": "Rename `into_parts()` to `make_parts()`",
          "timestamp": "2022-04-15T20:56:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b7ea31f28ee36e1324960ea48d5c1aa6abc19f93"
        },
        "date": 1650254182865,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375828,
            "range": "± 2829",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 232506747,
            "range": "± 1434180",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 117961232,
            "range": "± 1902848",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 11363876,
            "range": "± 71914",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 37032705,
            "range": "± 164730",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 49306321,
            "range": "± 1069362",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14687071,
            "range": "± 10707",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2684483,
            "range": "± 4877",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2655122,
            "range": "± 7200",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "b7ea31f28ee36e1324960ea48d5c1aa6abc19f93",
          "message": "Rename `into_parts()` to `make_parts()`",
          "timestamp": "2022-04-15T20:56:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b7ea31f28ee36e1324960ea48d5c1aa6abc19f93"
        },
        "date": 1650340869402,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 376176,
            "range": "± 2757",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 236829178,
            "range": "± 8094901",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 118010046,
            "range": "± 1314112",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 8987003,
            "range": "± 30476",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 33876397,
            "range": "± 540898",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 60189129,
            "range": "± 1685157",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12977933,
            "range": "± 9625",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2849854,
            "range": "± 58998",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2741668,
            "range": "± 47105",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "b7ea31f28ee36e1324960ea48d5c1aa6abc19f93",
          "message": "Rename `into_parts()` to `make_parts()`",
          "timestamp": "2022-04-15T20:56:11Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/b7ea31f28ee36e1324960ea48d5c1aa6abc19f93"
        },
        "date": 1650427427816,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 371779,
            "range": "± 2973",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 222534431,
            "range": "± 345359",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 110076348,
            "range": "± 608501",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 12611601,
            "range": "± 58756",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36232163,
            "range": "± 74390",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 49010276,
            "range": "± 482125",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14689313,
            "range": "± 7127",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2681793,
            "range": "± 3353",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2685178,
            "range": "± 4009",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "cf308c5efc303e210b02e0c377caa58f8a6a0a9b",
          "message": "Provide `&mut Context` to subgraph closure, instead of just ref\n\nFor now does not affect any external API, but is a preqrequisite for\n`&mut Context` in the surface API",
          "timestamp": "2022-04-19T23:51:40Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/cf308c5efc303e210b02e0c377caa58f8a6a0a9b"
        },
        "date": 1650513873634,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 408767,
            "range": "± 8969",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 280172493,
            "range": "± 4920396",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 139880593,
            "range": "± 3859907",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 14017327,
            "range": "± 597775",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 43798830,
            "range": "± 1015722",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 68343945,
            "range": "± 1993899",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18948677,
            "range": "± 424870",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 3697255,
            "range": "± 117092",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 3598532,
            "range": "± 104746",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "cf308c5efc303e210b02e0c377caa58f8a6a0a9b",
          "message": "Provide `&mut Context` to subgraph closure, instead of just ref\n\nFor now does not affect any external API, but is a preqrequisite for\n`&mut Context` in the surface API",
          "timestamp": "2022-04-19T23:51:40Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/cf308c5efc303e210b02e0c377caa58f8a6a0a9b"
        },
        "date": 1650600261911,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 330735,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 214856761,
            "range": "± 1563109",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 106606255,
            "range": "± 1663686",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10483091,
            "range": "± 92913",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 32587169,
            "range": "± 77432",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 41810076,
            "range": "± 433270",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 12957372,
            "range": "± 36173",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2386976,
            "range": "± 7722",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2367715,
            "range": "± 2009",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "cf308c5efc303e210b02e0c377caa58f8a6a0a9b",
          "message": "Provide `&mut Context` to subgraph closure, instead of just ref\n\nFor now does not affect any external API, but is a preqrequisite for\n`&mut Context` in the surface API",
          "timestamp": "2022-04-19T23:51:40Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/cf308c5efc303e210b02e0c377caa58f8a6a0a9b"
        },
        "date": 1650685972568,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 317500,
            "range": "± 4966",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 216081229,
            "range": "± 738994",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 98997625,
            "range": "± 1761340",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10822668,
            "range": "± 46708",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 34344771,
            "range": "± 147687",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 57504242,
            "range": "± 361158",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 18214318,
            "range": "± 20151",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2926458,
            "range": "± 8322",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2883269,
            "range": "± 2444",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "committer": {
            "name": "Mingwei Samuel",
            "username": "MingweiSamuel",
            "email": "mingwei.samuel@gmail.com"
          },
          "id": "cf308c5efc303e210b02e0c377caa58f8a6a0a9b",
          "message": "Provide `&mut Context` to subgraph closure, instead of just ref\n\nFor now does not affect any external API, but is a preqrequisite for\n`&mut Context` in the surface API",
          "timestamp": "2022-04-19T23:51:40Z",
          "url": "https://github.com/hydro-project/hydroflow/commit/cf308c5efc303e210b02e0c377caa58f8a6a0a9b"
        },
        "date": 1650772278091,
        "tool": "cargo",
        "benches": [
          {
            "name": "arithmetic/hydroflow/compiled",
            "value": 375100,
            "range": "± 3008",
            "unit": "ns/iter"
          },
          {
            "name": "fan_in/hydroflow",
            "value": 235830505,
            "range": "± 1455712",
            "unit": "ns/iter"
          },
          {
            "name": "fan_out/hydroflow/scheduled",
            "value": 109437371,
            "range": "± 1171965",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow",
            "value": 10072019,
            "range": "± 43662",
            "unit": "ns/iter"
          },
          {
            "name": "fork_join/hydroflow_builder",
            "value": 36508067,
            "range": "± 100844",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow",
            "value": 49812856,
            "range": "± 1457435",
            "unit": "ns/iter"
          },
          {
            "name": "identity/hydroflow/compiled",
            "value": 14682985,
            "range": "± 9322",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow/scheduled",
            "value": 2699960,
            "range": "± 5734",
            "unit": "ns/iter"
          },
          {
            "name": "reachability/hydroflow",
            "value": 2657900,
            "range": "± 2359",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}