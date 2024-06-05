# Slimming-2.0 <img src="https://github.com/slimming-fat/Slimming-2.0/tree/main/logo/logo.png" align="left" height="135px" alt="Slimming-2.0 logo"/>

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
|     `Repair`     | `boolean` | If this is true, Slimming creates a debloated version of the pom without unused dependencies called pom-result.xml.**Default value is**: `true` |
| `TreeCallGraph`  | `boolean` | If this is true, Slimming can obtain a dependency call graph.**Default value is**: `true` |
| `ClassCallGraph` | `boolean` | If this is true, Slimming can obtain a class call graph.**Default value is**: `false` |
|    `reflect`     | `boolean` | If this is true, Slimming performs class-level reflection analysis.**Default value is**: `true` |
|     `outDir`     | `String`  | Customize the storage path for storing the analysis results of bloated dependencies |

## Step 4: Obtain the results
