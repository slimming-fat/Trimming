# Slimming-2.0 ![Slimming-2.0 logo](https://github.com/slimming-fat/Slimming-2.0/tree/main/logo/Slimming_logo.png)
## What is Slimming-2.0?

Slimming-2.0 automatically cleans the bloated methods and classes of Java bytecode.
Slimming-2.0 incorporates enhanced reflection and dependency analysis to ensure type safety and handle dynamic binding.
Slimming-2.0 does not modify the original source code of the application nor its original `pom.xml`.

## Usage

### Step 1: DownLoads

[**Slimming-2.0**](https://github.com/slimming-fat/Slimming-2.0/tree/main/tool_slimming-2.0/tool.7z)


### Step 2: Install

* For **windows**, run [`install.bat`](https://github.com/slimming-fat/Slimming-2.0/tree/main/tool_slimming-2.0/install.bat)
* For **linux**, run [`install.sh`](https://github.com/slimming-fat/Slimming-2.0/tree/main/tool_slimming-2.0/install.sh)

### Step 3: Run

```java
mvn neu.lab:slimming-2.0:1.0:debloat
```

#### Optional Parameters

|       Name       |   Type    | Description                                                  |
| :--------------: | :-------: | :----------------------------------------------------------- |
|     `entryPointStrategy`     | `String` | Slimming-2.0 offers four entry method strategies for debloating: `Main`, `ProjectCoreMethod`, `Test`, and `ProjectCoreMethodAndTest`. **Default value is**: `ProjectCoreMethodAndTest` |

## Step 4: Obtain the results
