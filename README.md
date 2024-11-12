# Trimming 
## 1. What is Trimming?

Trimming automatically cleans the bloated methods and classes of Java bytecode.
Trimming incorporates enhanced reflection and dependency analysis to ensure type safety and handle dynamic binding.
Trimming does not modify the original source code of the application nor its original `pom.xml`.

## 2. Usage

#### Step 1: DownLoads

   [**Trimming**](https://github.com/slimming-fat/Slimming-2.0/tree/main/tool_slimming-2.0/tool.7z)


#### Step 2: Install

* For **windows**, run [`install.bat`](https://github.com/slimming-fat/Slimming-2.0/tree/main/tool_trimming/install.bat)
* For **linux**, run [`install.sh`](https://github.com/slimming-fat/Slimming-2.0/tree/main/tool_trimming/install.sh)

 #### Step 3: Run

```java
mvn neu.lab:trimming:1.0:debloat
```

 #### Optional Parameters

|       Name       |   Type    | Description                                                  |
| :--------------: | :-------: | :----------------------------------------------------------- |
|     `entryPointStrategy`     | `String` | Trimming offers four entry method strategies for debloating: `Main`, `ProjectCoreMethod`, `Test`, and `ProjectCoreMethodAndTest`. **Default value is**: `ProjectCoreMethodAndTest` |

#### Step 4: Obtain the results
```PLAINTEXT
project
├── src
│   ├── test
│   └── main
└── .debloat                                 // result of Trimming
    ├── *-with-dependencies-original.jar     // project original JAR
    ├── *-with-dependencies-debloated.jar    // project debloated JAR
    ├── debloatedResults.html                // Visualization results
    ├── echarts.min.js                       // Visualization library
    └── runResult.log                        
```
**runResult.log**
```java
originalSize:44006        // Size:KB
debloatedSize:39154       // Size:KB
runTime:216301            // Time:ms
bloatedClassesSize:3788   
bloatedMethodsSize:18960
testsRun:Tests run: 27, Failures: 0, Errors: 0, Skipped: 0  // After running test cases on the debloated project
```
## 3. A demo of Trimming
![A demp of Trimming](logo/guide.gif)


